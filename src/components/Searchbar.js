import React, { useState } from 'react'

import './Searchbar.css'

const Searchbar = () => {
  const [term, setTerm] = useState('')

  return (
    <div className="searchbar">
      <form onSubmit={}>
        <label className="search" htmlFor="search">Search:</label>
        <input 
          type="text" value=""
          id="search" 
          placeholder="Search a recipe"
        />
      </form>
    </div>
  )
}

export default Searchbar