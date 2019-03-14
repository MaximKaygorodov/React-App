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
// Изменение  неопубликованной статьи
        function EditArticle() {
		getDate();
		var form = document.forms.contentForm; 
		var idText = form.elements.id;
        var titleText = form.elements.title; 
        var contextText = form.elements.context;
    var dataForServer = {
		'id': idText,
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('api/contents/', myInit).then(function(content){
        console.log(content);
        reset();
        }
		}
		
		
// Изменение  опубликованной статьи
        function EditArticle() {
		getDate();
		var form = document.forms.contentForm; 
		var idText = form.elements.id;
        var titleText = form.elements.title; 
        var contextText = form.elements.context;
    var dataForServer = {
		'id': idText,
        'title': titleText,
        'context': contextText,
        'time': timeText
        }
    var myInit = { 
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify( dataForServer )
                };
    fetch('aplic/contents/', myInit).then(function(content){
        console.log(content);
        reset();
        }
		}