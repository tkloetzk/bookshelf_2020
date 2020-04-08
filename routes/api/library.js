const express = require('express');
const get = require('lodash/get');
const axios = require('axios');

const router = express.Router();
const endpointUrl = 'https://gateway.bibliocommons.com/v2/libraries/hclib/bibs/search?locale=en-US'

router.get('/v1/availability/:isbn', async (req, res) => {
  const isbn = get(req.params, 'isbn');
  
  const response = await axios.get(`${endpointUrl}%3F&query=identifier%3A(${isbn})&searchType=bl`)
  res.send({ book: Object.values(get(response.data, 'entities.bibs', {}))})
})

router.post('/v1/search/:query', async (req, res) => {
  const query = get(req.params, 'query');

  const response = await axios.post(endpointUrl, {
    query,
    searchType: "smart",
    view: "grouped",
  })

  res.send({ 
    data: {
      books: Object.values(get(response.data, 'entities.bibs', {})),
      pagination: response.data.catalogSearch.pagination
    }
  })
})

module.exports = router;
