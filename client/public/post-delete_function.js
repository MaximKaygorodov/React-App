// сброс формы
function reset() {
    var form = document.forms["contentForm"];
    form.reset();
    form.elements["id"].value = 0;
}

// Сохранение даты
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


// Удаление данных статьи из json
var deleteMethod = { 
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
            };

    
// Сохранение данных статьи в json
var postMethod = { 
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:  JSON.stringify( articleForServer )
            };



// Значения статьи




// Отправка статьи на сервер из Опубликованых или неопубликованных


            // functions for Editor

function click(){
    console.log('oh hi')
}

// Добавление статьи в неопбуликованые из редактора
function saveUnpublished() {
    var form = document.forms.contentForm; 
    var titleText = form.elements.title; 
    var contextText = form.elements.context;
    var saveArticleToServer = {
        'title': titleText.value,
        'context': contextText.value,
        'time': timeText
        }
        console.log('clicked')
        getDate();
        getArticleData();
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
// Публикация статьи из редактора
function savePublished() {
    var form = document.forms.contentForm; 
    var titleText = form.elements.title; 
    var contextText = form.elements.context;
    var saveArticleToServer = {
        'title': titleText.value,
        'context': contextText.value,
        'time': timeText
        }
        getDate();
        getArticleData();
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

            // functions for UnpublishedArticles


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

// Публикуем неопубликованную статью

function publishUnpublished () {
        getDate();
        var articleId = props.article.id
        var articleTitle = props.article.title; 
        var articleContext = props.article.context;
        var articleForServer = {
            'title': articleTitle,
            'context': articleContext,
            'time': timeText
            }
    fetch('aplic/contents/', postMethod).then(function(content){
        console.log(content);
        deleteUnpublished();
        });
}
// Удаляем статью из неопубликованных
function deleteUnpublished() {
    fetch('api/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}

                //functions for PublishedArticles 

// Удаляем статью из Опубликованных
function deletePublished() {
    fetch('aplic/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}