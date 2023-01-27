import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';


const Search = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) {return setSearchResults(posts.results)}

        const resultsArray = (posts.results).filter(post => (post.name).includes(e.target.value))

        setSearchResults(resultsArray)
    }

   

    return (
        <>
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder='Search...'
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearchChange} className="search__button">
                  <BiSearchAlt2 />
                </button>
            </form>
        </header>
      
        </>
    )
}

export default Search;   