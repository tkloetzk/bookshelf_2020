import '@testing-library/jest-dom'
import React from 'react'
import { render } from '../../testHelpers/testApplication'
import {fireEvent} from '@testing-library/react'
import App from '../App'
//import '@testing-library/jest-dom/extend-expect'

test.only('renders correctly and changes tabs', async () => {
    const { queryByText, queryAllByRole, debug, queryByTestId} = render(<App />)
    const header = queryByText('Book Review Aggregator')
    let [searchTab, bookshelfTab] = await queryAllByRole('tab')
    const searchTabContent = queryByText('0')
    const bookshelfTabContent = queryByText('1')

    expect(header).not.toBeNull()

    expect(searchTab).not.toBeNull()
    expect(searchTab).toHaveAttribute('aria-selected', 'true')
    expect(searchTabContent).not.toBeNull()

    expect(bookshelfTab).not.toBeNull()
    expect(bookshelfTab).toHaveAttribute('aria-selected', 'false')
    expect(bookshelfTabContent).toBeNull()

    bookshelfTab = await queryAllByRole('tab')[1]
    fireEvent.click(bookshelfTab)
    
    // Verify we're on the bookshelf tab

})