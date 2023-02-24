import React from 'react'

const SearchItem = ({ serach, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id='search'
        role='searchbox'
        placeholder='Search'
        value={serach}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem