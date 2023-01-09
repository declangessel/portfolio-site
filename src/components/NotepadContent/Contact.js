import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'

const Icons = { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaSpotify };


const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    margin-left: 10px;
`

const StyledLink = styled.a`
    color: black;
    display: flex;
    align-items: center;

`

function Contact({ content }) {
    const { email, emailText} = content;
    const mailto = `mailto:${email}`;
    return (
        <div>
            <h2>Hey, what's up?</h2>
            <p>{emailText}<a href={mailto}>{email}</a></p>
            Or reach out below:
            <br />
            <a href="https://www.linkedin.com/in/declangessel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <br />
            <a href="https://github.com/declangessel" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br />
            <a href="https://www.instagram.com/declangessel/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <br />
        </div>
    )
}

export default Contact
