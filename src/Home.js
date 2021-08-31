import React from 'react';
import './Home.css'
import Banner from './components/Banner'
// ES7 snippets to do 'rfc'


const Home = () => {
    return (
        <div className="home">
            <Banner />
            <h1>Home Component</h1>
        </div>
    );
}

export default Home;
