import React from 'react'

function UnpublisedArticle(props) {
    const body = <p>{props.article.context.substring(0,500)}</p>

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
        var articleId = props.article.id
        var articleTitle = props.article.title; 
        var articleContext = props.article.context;
        var articleForServer = {
            'title': articleTitle,
            'context': articleContext,
            'time': getDate
            }
    fetch('aplic/contents/', postMethod).then(function(content){
        console.log(content);
        deleteUnpublished();
        });
function deleteUnpublished() {
    fetch('api/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}
var deleteMethod = { 
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
            };

var postMethod = { 
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify( articleForServer )
            };
}
    return (
        <div class="row">
            <div class="card col-10">
                <div class="card-body">
                    <h3>{props.article.title}</h3><br/>
                    {body}
                </div>
            </div>
            <div class="btn-group-vertical ml-1 h-25">
                <button type="button" class="btn-danger btn" data-toggle="modal" data-target={"#myModal" + props.article.id}><i class="fas fa-trash-alt"></i></button>
                <button type="button" class="btn-light btn"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn-light btn" onClick={publishUnpublished}><i class="fas fa-bullhorn"></i></button>      
            </div>
        </div>
    )}


    
export default UnpublisedArticle