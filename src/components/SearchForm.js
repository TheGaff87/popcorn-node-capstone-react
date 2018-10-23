import React from 'react';

import './SearchForm.css';

export default function SearchForm() {
    return(
        <form className="search-video">
            <label htmlFor="video-title">
                <input id="video-title" type="text" placeholder="What do you want to watch right now?"/>
            </label>
            <button>Search</button>
        </form>
    );
}
