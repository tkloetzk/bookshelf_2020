import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../App'

test('renders correctly and changes tabs', () => {
    const { queryByText, queryAllByRole, debug } = render(<App />)
    const header = queryByText('Book Review Aggregator')
    let [searchTab, bookshelfTab] = queryAllByRole('tab')
    const searchTabContent = queryByText('0')
    const bookshelfTabContent = queryByText('1')

    expect(header).not.toBeNull()

    expect(searchTab).not.toBeNull()
    expect(searchTab).toHaveAttribute('aria-selected', 'true')
    expect(searchTabContent).not.toBeNull()

    expect(bookshelfTab).not.toBeNull()
    expect(bookshelfTab).toHaveAttribute('aria-selected', 'false')
    expect(bookshelfTabContent).toBeNull()

    debug(bookshelfTab)
    fireEvent.click(bookshelfTab)
    [searchTab, bookshelfTab] = queryAllByRole('tab')
    expect(searchTab).toHaveAttribute('aria-selected', 'true')

})