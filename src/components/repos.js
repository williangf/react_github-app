'use strict'

import React from 'react';

const Repos = ({ className, title, repos }) => (
    <div>
        <h2>{title}</h2>
        <ul className={className}>
            {repos.map((repo, index) => (
                <li key={index}>
                    <a href={repo.link} target="_blank">{repo.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.protoTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array
}

export default Repos; 