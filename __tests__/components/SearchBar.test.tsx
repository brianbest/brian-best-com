import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SearchBar } from '@/components/search-bar'

describe('SearchBar', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('renders with default placeholder', () => {
    render(<SearchBar onSearch={jest.fn()} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<SearchBar onSearch={jest.fn()} placeholder="Search posts..." />)
    expect(screen.getByPlaceholderText('Search posts...')).toBeInTheDocument()
  })

  it('calls onSearch after debounce delay', async () => {
    const handleSearch = jest.fn()
    render(<SearchBar onSearch={handleSearch} />)

    const input = screen.getByPlaceholderText('Search...')
    fireEvent.change(input, { target: { value: 'test query' } })

    expect(handleSearch).not.toHaveBeenCalled()

    jest.advanceTimersByTime(300)

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledWith('test query')
    })
  })

  it('shows clear button when query is present', () => {
    render(<SearchBar onSearch={jest.fn()} />)

    const input = screen.getByPlaceholderText('Search...')
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'test' } })
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument()
  })

  it('clears input when clear button is clicked', () => {
    const handleSearch = jest.fn()
    render(<SearchBar onSearch={handleSearch} />)

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'test' } })

    expect(input.value).toBe('test')

    const clearButton = screen.getByLabelText('Clear search')
    fireEvent.click(clearButton)

    expect(input.value).toBe('')
  })

  it('debounces multiple rapid changes', async () => {
    const handleSearch = jest.fn()
    render(<SearchBar onSearch={handleSearch} />)

    const input = screen.getByPlaceholderText('Search...')
    
    fireEvent.change(input, { target: { value: 't' } })
    fireEvent.change(input, { target: { value: 'te' } })
    fireEvent.change(input, { target: { value: 'tes' } })
    fireEvent.change(input, { target: { value: 'test' } })

    jest.advanceTimersByTime(300)

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledTimes(1)
      expect(handleSearch).toHaveBeenCalledWith('test')
    })
  })
})
