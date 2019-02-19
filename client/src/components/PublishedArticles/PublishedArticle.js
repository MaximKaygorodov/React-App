import React from 'react'

function PublisedArticle(props) {
    const body = <p>{props.article.context}</p>
    return (
        <div class="panel panel-default col-md-4 col-xs-12 pArticle">
                    <div class="panel-body">
                        <h3>{props.article.title}</h3>
                        <hr></hr>
                        {body}
                    </div>
                </div>
    )}

export default PublisedArticle