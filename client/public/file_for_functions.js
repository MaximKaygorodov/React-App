//functions for createNewArticle page
// сброс формы
function reset() {
    var form = document.forms["contentForm"];
    form.reset();
    form.elements["id"].value = 0;
}
// Добавление статьи
// #save.OnClick (Editor.js)
function CreateContent(titleText, contextText) {
    var dat = new Date();
        timeText=dat.getDate();
        month = dat.getMonth()+1;
        timeText=timeText+"."+month;            
        timeText=timeText+"."+dat.getFullYear();
        timeText=timeText+"  "+dat.getHours();	  
        timeText=timeText+":"+dat.getMinutes();
        timeText=timeText+":"+dat.getSeconds();
    var dataForServer = {
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('api/contents/', myInit).then(function(content){
        console.log(content);
        reset();
        });
}
// публикация только что написанной статьи
// #publish.OnClick (Editor.js)
function PublishContent2(titleText, contextText) {
    var dat = new Date();
        timeText=dat.getDate();
        month = dat.getMonth()+1;
        timeText=timeText+"."+month;            
        timeText=timeText+"."+dat.getFullYear();
        timeText=timeText+"  "+dat.getHours();	  
        timeText=timeText+":"+dat.getMinutes();
        timeText=timeText+":"+dat.getSeconds();
    var dataForServer = {
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('aplic/contents/', myInit).then(function(content){
        console.log(content);
        reset();
        });
}


//functions for UnpublishedArticles page

//публикуем неопубликованную статью
// button_publish.OnClick (article.title, aticle.context) 
function PublishContent2(titleText, contextText) {
    var dat = new Date();
        timeText=dat.getDate();
        month = dat.getMonth()+1;
        timeText=timeText+"."+month;            
        timeText=timeText+"."+dat.getFullYear();
        timeText=timeText+"  "+dat.getHours();	  
        timeText=timeText+":"+dat.getMinutes();
        timeText=timeText+":"+dat.getSeconds();
    var dataForServer = {
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('aplic/contents/', myInit).then(function(content){
        console.log(content);
        reset();
        });
}
// Удаляем статью из неопубликованных (срабатывает и просто при удалении, и при публикации)
function DeleteContent(id) {
    var myInit = { 
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
                };
    fetch('api/contents/'+id, myInit).then(function(content){
    console.log(content);
    });
}
//При удалении статьи сначала переносим ее в архив (function ArchieveContent), потом удаляем
function ArchieveContent(titleText, contextText, timeText) {
    var dataForServer = {
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('api/archieve/', myInit).then(function(content){
        console.log(content);
        reset();
        });
}


//functions for PublishedArticles page
//При удалении статьи сначала переносим ее в архив (function ArchieveContent), потом удаляем
function ArchieveContent(titleText, contextText, timeText) {
    var dataForServer = {
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('api/archieve/', myInit).then(function(content){
        console.log(content);
        reset();
        });
}
// Удаляем статью из Опубликованных
function DeleteContent(id) {
    var myInit = { 
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
                };
    fetch('aplic/contents/'+id, myInit).then(function(content){
    console.log(content);
    });
}