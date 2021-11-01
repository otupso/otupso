import React from 'react';
import axios from 'axios';

function Home(){
    axios.get('http://localhost:8888/')
    .then(res => {
        console.log(res.data)
    });

    return(
        <div>
            <h1>HOME PAGE</h1>
        </div>
    );
}

export default Home;