import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    margin-bottom: 10px;
    margin-right: 15px;
    font-size: 1.1em;
`

function Projects({ content }) {
    const { projects } = content;
    return (
        <div>
            <h2>Projects and Hobbies</h2>
            {
                projects.map((project, idx) => (
                    <div key={idx}>
                        <h3>{project.title}</h3>
                        <p>{project.description.split('\n').map((line, index) => <span key={index}>{line}<br/></span>)}</p>
                        {
                            project.url &&
                            <StyledLink href={project.url} target="__blank">Link</StyledLink>
                        }
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Projects
