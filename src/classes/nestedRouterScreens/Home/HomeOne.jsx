import React from 'react';
import { useHistory } from "react-router-dom";

export default function HomeOne() {
    let history = useHistory();
    return (
        <div>
            <span onClick={() => history.push('/about')}>Go to about</span>
            <br />
            <span onClick={() => history.push('/contact')}>Go to contact</span>
            <br />
            <span onClick={() => history.push('/home')}>Go to Home</span>
            <br />
            <span onClick={() => history.push('/home/hometwo')}>Go to Home Two</span>
            <h1>Hello Home One</h1>
        </div>
    )
}