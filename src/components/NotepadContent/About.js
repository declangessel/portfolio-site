import React from 'react'

function About({ content }) {
    const { paragraphs } = content;
    return (
        <div>
            <h2>Declan Gessel</h2>
            {
                paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))
            }
            <hr />
            <br />
            Find me on:
            <br />
            <a href="https://twitter.com/declangessel_/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <br />
            <a href="https://www.instagram.com/declangessel/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <br />
        </div>
    )
}

export default About
