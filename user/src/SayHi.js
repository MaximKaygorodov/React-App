import React from 'react'
import articles from './articles'

function SayHi (props) {
    const body = articles[0]
    return (
        <div>
            <h1>Hi {body.title} {props.name}</h1>
        </div>
    )
}

export default SayHi;