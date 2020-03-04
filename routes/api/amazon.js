const express = require('express');
const get = require('lodash/get');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

router.post('/v2', (req, res) => {
  const api = '90d416faaa0849a3aac0e060f6faf854';
  //const api = 'ad7f80a474b68485cc2b6f22485fcd5f';
  const isbn = get(req.body, 'isbn');
  const url =
    `http://api.scraperapi.com/?key=${api}&url=` +
    encodeURIComponent(
      `https://www.amazon.com/s/ref=sr_st_review-rank?keywords=${isbn}&rh=i%3Aaps%2Ck%3A${isbn}&sort=review-rank`
      // `https://www.amazon.com/s/ref=sr_nr_i_0?fst=as%3Aoff&rh=k%3A${isbn}%2Ci%3Astripbooks&keywords=${isbn}&ie=UTF8`
    );

  axios.get(url).then(async html => {
    const $ = await cheerio.load(html.data)

    const keywordSelector = `a[href*="keywords=${isbn}"]`;
    const book = {
      amazonAverageRating: parseFloat(
        $('span[data-a-popover*="average-customer-review"]')
          .text()
          .split(' o')[0]
      ),
      amazonRatingsCount: parseInt(
        $('span[data-a-popover*="average-customer-review"]')
          .parent()
          .next()
          .text()
          .trim()
          .replace(',', '')
      ),
     // price: $(`${keywordSelector} > .a-offscreen`).text(),
      isbn,
    };
    res.send({ book });
  })
  .catch(error => {
    console.error(error);
    res.error({ msg: error });
  })
});

module.exports = router;
