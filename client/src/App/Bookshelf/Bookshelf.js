import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Results from '../Results/Results'
import { getBookshelf } from '../../store/bookshelf/bookshelfActions'

export default function Bookshelf() {
  const dispatch = useDispatch()
  const bookshelf = useSelector(({bookshelf}) => bookshelf.bookshelf)

  useEffect(() => {
    dispatch(getBookshelf())
  }, [dispatch])

    return (
        <>
          {/* <GenreSelector setBookshelfFiltered={setBookshelfFiltered} /> */}
          <Results
            booklist={bookshelf}
            // handleSave={handleSave}
            // handleDelete={handleDelete}
          />
        </>
      )
}