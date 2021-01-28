import React from 'react';
import { useHistory } from "react-router-dom";

export default function About() {
    let history = useHistory();
    return (
        <div>
            <span onClick={() => history.push('/home')}>Go to home</span>
            <br />
            <span onClick={() => history.push('/contact')}>Go to contact</span>
            <h1>Hello About</h1>
        </div>
    )
}