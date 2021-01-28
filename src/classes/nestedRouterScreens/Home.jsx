import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {
    let history = useHistory();
    return (
        <div>
            <span onClick={() => history.push('/about')}>Go to about</span>
            <br />
            <span onClick={() => history.push('/contact')}>Go to contact</span>
            <br />
            <span onClick={() => history.push('/home/homeone')}>Go to home one</span>
            <br />
            <span onClick={() => history.push('/home/hometwo')}>Go to home two</span>
            <h1>Hello Home</h1>
        </div>
    )
}