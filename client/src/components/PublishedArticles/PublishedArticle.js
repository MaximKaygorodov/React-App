import React from 'react'

function PublisedArticle(props) {
    const body = <p>{props.article.context}</p>
    return (
        <div>
            <div class="card-body">
                        <h3>{props.article.title}</h3>
                        <hr></hr>
                        {body}
                    </div>
            <div class="card-footer">
                <p class="small text-muted">Published {props.article.time}</p>
            </div>
        </div>
    )}

export default PublisedArticle