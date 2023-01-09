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
            <a href="https://www.linkedin.com/in/declangessel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />
            <a href="https://github.com/declangessel" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br />
            <a href="https://www.instagram.com/declangessel/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <br />
            <a href="https://open.spotify.com/user/dghrnim2uztw50sl6jwa4lgez?si=54e85ebf1b844d2e/" target="_blank" rel="noopener noreferrer">Spotify</a>
            <br />
            <br />
            And:
            <br />
            <a href="https://docs.google.com/document/d/1hAhNktHRrfwLPlPECqicOBSTWvufPPWcNDvgK8aWjr8/export?format=pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            
        </div>
    )
}

export default About
