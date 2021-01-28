import React from 'react';
import { useHistory } from "react-router-dom";

export default function Contact() {
    let history = useHistory();
    return (
        <div>
            <span onClick={() => history.push('/home')}>Go to home</span>
            <br />
            <span onClick={() => history.push('/about')}>Go to about</span>
            <h1>Hello Contact</h1>
        </div>
    )
}