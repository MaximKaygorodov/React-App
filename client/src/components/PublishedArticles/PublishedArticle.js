import React from 'react'
import Modal from './Modal'
import { Router , Link} from 'react-router-dom'
import {history} from '../SideMenuComponents/SideMenuBody'



function PublisedArticle(props) {

    function getDate() {
        var dat = new Date();
        var timeText=dat.getDate();
        var month = dat.getMonth()+1;
            timeText=timeText+"."+month;            
            timeText=timeText+"."+dat.getFullYear();
            timeText=timeText+"  "+dat.getHours();	  
            timeText=timeText+":"+dat.getMinutes();
            timeText=timeText+":"+dat.getSeconds();
        return (timeText);
    }

    function unpublishPublished () {
        getDate();
        var articleTitle = props.article.title; 
        var articleContext = props.article.context;
        var articleForServer = {
            'title': articleTitle,
            'context': articleContext,
            'time': getDate()
            }
        var postMethod = { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:  JSON.stringify( articleForServer )
        };
    fetch('api/contents/', postMethod).then(function(content){
        console.log(content);
        deletePublished();
        });
}

function deletePublished() {
    var articleId = props.article.id

    var deleteMethod = { 
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
                };
    fetch('aplic/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}


    const body = props.article.context.substring(0,500) + '...'
    return (
        <Router history={history}>
        
        <div>
            <div class="rounded d-flex justify-content-around ml-auto mr-1 mt-1 slide-bar">
                <i data-toggle="modal" data-target={"#myModal" + props.article.id} class="slide-bar-item small align-self-center far fa-trash-alt"></i>
                <i class="slide-bar-item small align-self-center far fa-edit"></i>
                <i onClick={unpublishPublished} class="slide-bar-item small align-self-center far fa-folder-open"></i>
            </div>
            <div class="card-body">
            <Link class="black-link" to={{pathname: '/publishedArticlePage' , articleData: {mes: 'oh hi'} }}>
                <h3>{props.article.title}</h3>
                <hr/>
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