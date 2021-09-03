import React from 'react';
import './SearchPage.css'
import SearchResult from './components/SearchResult'
import { Button } from '@material-ui/core';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <h1>Stay nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/d132b02c-51c5-4e12-960c-47fe91b7eb6f.jpg?im_w=1200"
                title="Farm stay hosted by Shahid"
                description="Its a well maintained old Bungalow. An old lady and her mid aged son is taking care that now.
The guests are on his own there like cleaning washing cooking etc.."
                price="$24/night"
                star={4.73}
                total="$117 total" />
        </div>
    );
}

export default SearchPage;
