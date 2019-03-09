import React from 'react'
import QuillTextArea from './QuillTextArea';

function reset() {
    var form = document.forms["contentForm"];
    form.reset();
    form.elements["id"].value = 0;
}


function getArticleDate() {
    var dat = new Date();
    var timeText=dat.getDate();
    var month = dat.getMonth() + 1;
        timeText=timeText+"."+month;            
        timeText=timeText+"."+dat.getFullYear();
        timeText=timeText+"  "+dat.getHours();	  
        timeText=timeText+":"+dat.getMinutes();
    return (timeText);
}

function saveUnpublished() {
    var form = document.forms.contentForm; 
    var titleText = form.elements.title; 
    var contextText = form.elements.context;
    var saveArticleToServer = {
        'title': titleText.value,
        'context': contextText.value,
        'time': getArticleDate()
        }
    console.log('clicked')
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( saveArticleToServer )
                };
fetch('api/contents/', myInit).then(function(content){
    console.log(content);
    reset();
    });
}

function savePublished() {
    var form = document.forms.contentForm; 
    var titleText = form.elements.title; 
    var contextText = form.elements.context;
    var saveArticleToServer = {
        'title': titleText.value,
        'context': contextText.value,
        'time': getArticleDate()
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( saveArticleToServer )
                };
fetch('aplic/contents/', myInit).then(function(content){
    console.log(content);
    reset();
    });
}

function Editor() {
    return (
        <div class="row">
        <div class="col-12" >
                <form action="/action_page.php" name="contentForm">
                    <div class="form-group">
                            <label for="text-area">What's new? </label>
                            <input type="hidden" name="id" value="0" />
                          <QuillTextArea/>  
                    </div>
                    <div class="row justify-content-end mr-1">
                            <button type="button" onClick={savePublished} class="btn btn-light" id="publish">Publish Article</button>
                            <button type="button" onClick={saveUnpublished} class="btn btn-light" id="save">Save Article as Unpublished</button>
                    </div> 
                    </form>    
                               
        </div>
    </div>
    )
}

export default Editor