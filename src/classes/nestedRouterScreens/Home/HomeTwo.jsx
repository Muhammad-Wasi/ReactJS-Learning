import React from 'react';
import { useHistory } from "react-router-dom";

export default function HomeTwo() {
    let history = useHistory();
    return (
        <div>
            <span onClick={() => history.push('/about')}>Go to about</span>
            <br />
            <span onClick={() => history.push('/contact')}>Go to contact</span>
            <br />
            <span onClick={() => history.push('/home')}>Go to Home</span>
            <br />
            <span onClick={() => history.push('/home/homeone')}>Go to Home One</span>
            <h1>Hello Home Two</h1>
        </div>
    )
}