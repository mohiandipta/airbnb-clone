import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Search from './Search'
import './Banner.css'

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => { setShowSearch(!showSearch) }} className="banner__searchButton" variant="outlined">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and Stretch your imagination!</h1>
                <h5>Plan a different kind of getway to uncover the hidden gems near you.</h5>
                <Button variant="outlined" className="banner_button" ><a href="/search">Explore nearby</a></Button>
            </div>
        </div>
    );
}

export default Banner;
