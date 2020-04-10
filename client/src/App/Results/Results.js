import React from 'react'
import Book from '../Book/Book'
import { Grid } from '@material-ui/core'

const Results = ({ booklist }) => (
    <Grid container justify="center">
        {booklist.map(book => (
            <Book key={book.title}>
                <Book.Title title={book.title} />
                <Book.Cover image={book.thumbnail} />
                <Book.Description description={book.description} />
                <Book.Expandable>
                    <Book.Ratings text="Amazon Rating:" rating={book.amazonAverageRating} />
                    <Book.Ratings text="Goodreads Rating:" rating={book.goodreadsAverageRating} />
                    <Book.Ratings text="Amazon Review:" rating={book.amazonRatingsCount} />
                    <Book.Ratings text="Goodreads Review:" rating={book.goodreadsRatingsCount} />
                </Book.Expandable>
            </Book>
        ))}
    </Grid>
)

export default Results