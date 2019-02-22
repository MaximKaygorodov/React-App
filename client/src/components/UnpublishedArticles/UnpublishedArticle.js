import React from 'react'

function UnpublisedArticle(props) {
    const body = <p>{props.article.context}</p>
    return (
    <div class="row">
        <div class="well col-md-7 col-xs-10 uArticle">
        <h3>{props.article.title}</h3><br/>
        {body}
        </div>
    <div class="btn-group-vertical article-side-buttons">
        <button type="button" class="btn btn-danger"><span class="glyphicon glyphicon glyphicon-trash"></span></button>
            <button type="button" class="btn btn-default"><span class="glyphicon glyphicon glyphicon-pencil"></span></button>
            <button type="button" class="btn btn-default"><span class="glyphicon 	glyphicon glyphicon-menu-hamburger"></span></button>
        </div>
    </div>
    )}

export default UnpublisedArticle