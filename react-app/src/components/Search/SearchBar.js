import { useState } from 'react';
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    window.location.href = `/search/results/?query=${query}`;
  };

  return (
    <div>
      <input
        className='search'
        type="text"
        value={query}
        placeholder=" Search Tuoba"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button className="search-button hidden" onClick={handleSearch}><i className="fa">&#xf002;</i></button>

    </div>
  );
}

export default SearchBar
