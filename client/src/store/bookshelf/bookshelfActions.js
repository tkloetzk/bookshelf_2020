import { getBookshelfService } from '../../services/bookshelfService'
import * as types from './bookshelfActionTypes'

export function getBookshelfSuccess(bookshelf) {
    return {
      type: types.FETCH_BOOKSHELF_SUCCESS,
      bookshelf,
    }
  }

export function getBookshelf() {
    return dispatch => {
      return getBookshelfService()
        .then(bookshelf => {
       //   dispatch(getGenres())
          dispatch(getBookshelfSuccess(bookshelf))
          return bookshelf
        })
        .catch(error => {
          console.error('bookshelf error', error)
        })
    }
  }