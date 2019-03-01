import React from 'react'
import Modal from './Modal'
import { Router , Link} from 'react-router-dom'
import {history} from '../SideMenuComponents/SideMenuBody'

 

function PublisedArticle(props) {
    const body = props.article.context.substring(0,500) + '...'
    const articleData = props.article;
    return (
        <Router history={history}>
        
        <div>
            <div class="rounded d-flex justify-content-around ml-auto mr-1 mt-1 slide-bar">
                <i data-toggle="modal" data-target={"#myModal" + props.article.id} class="slide-bar-item small align-self-center far fa-trash-alt"></i>
                <i class="slide-bar-item small align-self-center far fa-edit"></i>
                <i class="slide-bar-item small align-self-center far fa-folder-open"></i>
            </div>
            <div class="card-body">
            <Link class="black-link" to='/publishedArticlePage'>
                <h3>{props.article.title}</h3>
                <hr></hr>
                {body}
                </Link>
            </div>
            <div class="card-footer">
                <p class="small text-muted">Published {props.article.time}</p>
            </div>
            <Modal article={props.article}/>
        </div>
        </Router>
    )}

export default PublisedArticle