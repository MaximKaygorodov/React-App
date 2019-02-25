import React from 'react'
import Modal from './Modal'

function PublisedArticle(props) {
    const body = <p>{props.article.context.substring(0,500)}...</p>

    return (
        <div>
            <div class="rounded d-flex justify-content-around ml-auto mr-1 mt-1 slide-bar">
                <i data-toggle="modal" data-target={"#myModal" + props.article.id} class="slide-bar-item small align-self-center far fa-trash-alt"></i>
                <i class="slide-bar-item small align-self-center far fa-edit"></i>
                <i class="slide-bar-item small align-self-center far fa-folder-open"></i>
            </div>
            <div class="card-body">
                <h3>{props.article.title}</h3>
                <hr></hr>
                {body}
            </div>
            <div class="card-footer">
                <p class="small text-muted">Published {props.article.time}</p>
            </div>
            <Modal article={props.article}/>
        </div>
    )}

export default PublisedArticle