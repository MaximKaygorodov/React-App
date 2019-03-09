import React from 'react'
import Modal from './Modal'
import ModalView from '../PublishedArticles/ModalView'


function UnpublisedArticle(props) {
    const body = <p>{props.article.context.substring(0,500)}...</p>

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

function publishUnpublished () {
        getDate();
        var articleTitle = props.article.title; 
        var articleContext = props.article.context;
        var articleForServer = {
            'title': articleTitle,
            'context': articleContext,
            'time': getDate
            }
        var postMethod = { 
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:  JSON.stringify( articleForServer )
                        };
    fetch('aplic/contents/', postMethod).then(function(content){
        console.log(content);
        deleteUnpublished();
        });}

function deleteUnpublished() {
    var articleId = props.article.id
    var deleteMethod = { 
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
                };    
    fetch('api/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}



    return (
        <div class="row">
            <div class="col-10">
                <div data-toggle="modal" data-target={"#myModalView" + props.article.id} class="card ">
                    <div class="card-body">
                        <h3>{props.article.title}</h3><hr/><br/>
                        {body}
                    </div>
                    <div class="card-footer text-right">
                        <p class="small">Saved {props.article.time}</p>
                    </div>
                </div>
                
            </div>
            <div class="btn-group-vertical ml-1 h-50">
                <button type="button" class="btn-danger btn" data-toggle="modal" data-target={"#myModal" + props.article.id}><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn-light btn"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn-light btn" onClick={publishUnpublished}><i class="fas fa-bullhorn"></i></button>      
            </div>
            <Modal article={props.article}/>
            <ModalView article={props.article}/>
        </div>
    )}


    
export default UnpublisedArticle