var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var cookieParser = require("cookie-parser");
var session = require("express-session");

 
var app = express();
var jsonParser = bodyParser.json();

app.use(cookieParser());
var cookies = { path: '/', httpOnly: true, secure: false, maxAge: null };

app.use(session({
    secret: "supersecret",
    key: "sid",
    cookie: cookies,
    store: new session.MemoryStore
}));

app.set("view engine", "hbs");
 
app.use(express.static(__dirname + "/static/"));

app.use("/editArticle/:contentID", function (request, response) {
    var id = request.params["contentID"];//id статьи
    response.render("createNewArticle.hbs", {
        conId: id
    });
});
// получение списка данных
app.get("/api/contents", function(req, res){
      
    var statya = fs.readFileSync("./client/src/contents.json", "utf8");
    var contents = JSON.parse(statya);
    res.send(contents);
});

function requiresLogin(req, res, next) {
    if (req.session && req.session.username) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
}
// выход из системы
app.post("/api/logout", jsonParser, function (req, res) {
    console.log("session destroyed", req.session.username);
    req.session.destroy();
    res.redirect(303, "/registration");
});
// сверка пароля и логина
app.post("/api/login", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400); 

    var userLogin = req.body.login;
    var userPassword = req.body.password;
    var user = {login: userLogin, password: userPassword};
     
    var data = fs.readFileSync("./client/src/logins.json", "utf8");
    var users = JSON.parse(data);

    var foundUser;
    for(var i=0; i<users.length; i++){
        var u = users[i];
        if ((u.login == userLogin) && u.password == userPassword){
            foundUser = u.login;
            break;
        }
    }
    if (foundUser !== undefined) {
        req.session.username = foundUser;
        res.status(303).send();
        console.log("Login successful: ", foundUser);
    }
    else{
        console.log("Login failed: ", req.body.login);
        res.status(404).send();
    }
});
// регистрация пользователя
app.post("/api/createUsers", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var userLogin = req.body.login;
    var userPassword = req.body.password;
    var user = {login: userLogin, password: userPassword};
     
    var data = fs.readFileSync("./client/src/logins.json", "utf8");
    var users = JSON.parse(data);
    var foundUser;
    for(var i=0; i<users.length; i++){
        var u = users[i];
        if (u.login == userLogin){
            foundUser = u.login;
            break;
        }
    }
    if (foundUser !== undefined) {
        res.status(404).send();
        console.log("User with this login already exists: ", foundUser);
    }
    else{
        console.log("User was successfully registered: ", userLogin);
        // находим максимальный id
        var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
        // увеличиваем его на единицу
        user.id = id+1;
        // добавляем пользователя в массив
        users.push(user);
        var data = JSON.stringify(users);
        // перезаписываем файл с новыми данными
        fs.writeFileSync("./client/src/logins.json", data);
        res.send(user);
    }
});
// получение одной статьи по id
app.get("/api/contents/:id", function(req, res){
      
    var id = req.params.id; // статью id
    var statya = fs.readFileSync("./client/src/contents.json", "utf8");
    var contents = JSON.parse(statya);
    var content = null;
    // находим в массиве статью по id
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==id){
            content = contents[i];
            break;
        }
    }
    // отправляем статью
    if(content){
        res.send(content);
    }
    else{
        res.status(404).send();
    }
});
// получение отправленных данных
app.post("/api/contents", requiresLogin, jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var titleText = req.body.title;
    var contextText = req.body.context;
    var timeText = req.body.time;
    var content = {title: titleText, context: contextText, time: timeText};
     
    var data = fs.readFileSync("./client/src/contents.json", "utf8");
    var contents = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,contents.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    content.id = id+1;
    // добавляем статью в массив
    contents.push(content);
    var data = JSON.stringify(contents);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("./client/src/contents.json", data);
    res.send(content);
});
 // удаление статьи по id
app.delete("/api/contents/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("./client/src/contents.json", "utf8");
    var contents = JSON.parse(data);
    var index = -1;
    // находим индекс статьи в массиве
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем статью из массива по индексу
        var content = contents.splice(index, 1)[0];
        var data = JSON.stringify(contents);
        fs.writeFileSync("./client/src/contents.json", data);
        // отправляем удаленную статью
        res.send(content);
    }
    else{
        res.status(404).send();
    }
});
// изменение статьи
app.put("/api/contents", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var contentId = req.body.id;
    var titleText = req.body.title;
    var contextText = req.body.context;
    var timeText = req.body.time;
     
    var data = fs.readFileSync("./client/src/contents.json", "utf8");
    var contents = JSON.parse(data);
    var content;
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==contentId){
            content = contents[i];
            break;
        }
    }
    // изменяем данные у статьи
    if(content){
        content.context = contextText;
        content.title = titleText;
        content.time = timeText;
        var data = JSON.stringify(contents);
        fs.writeFileSync("./client/src/contents.json", data);
        res.send(content);
    }
    else{
        res.status(404).send(content);
    }
});

//обработчик для открытия статей для второго сайта
app.get("/site/contents", function(req, res){
      
    var statya = fs.readFileSync("./user/src/articles.json", "utf8");
    var contents = JSON.parse(statya);
    res.send(contents);
});

//обработчик открытия статей опубликованных на нашей платформе
app.get("/aplic/contents", function(req, res){
      
    var statya = fs.readFileSync("./client/src/contents_ready.json", "utf8");
    var contents = JSON.parse(statya);
    res.send(contents);
});
// получение одной статьи по id
app.get("/aplic/contents/:id", function(req, res){
      
    var id = req.params.id; // статью id
    var statya = fs.readFileSync("./client/src/contents_ready.json", "utf8");
    var contents = JSON.parse(statya);
    var content = null;
    // находим в массиве статью по id
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==id){
            content = contents[i];
            break;
        }
    }
    // отправляем статью
    if(content){
        res.send(content);
    }
    else{
        res.status(404).send();
    }
});
// получение отправленных данных для публикации
app.post("/aplic/contents/", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var titleText = req.body.title;
    var contextText = req.body.context;
    var timeText = req.body.time;
    var content = {title: titleText, context: contextText, time: timeText};
     
    var data = fs.readFileSync("./client/src/contents_ready.json", "utf8");
    var contents = JSON.parse(data);

    var dataForSyte = fs.readFileSync("./user/src/articles.json", "utf8");
    var contentsForSyte = JSON.parse(dataForSyte);
     
    // находим максимальный id
    var id = Math.max.apply(Math,contents.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    content.id = id+1;
    // добавляем статью в массив
    contents.push(content);
    var data = JSON.stringify(contents);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("./client/src/contents_ready.json", data);

    // находим максимальный id
    var idNew = Math.max.apply(Math,contentsForSyte.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    content.id = idNew+1;
    // добавляем статью в массив
    contentsForSyte.push(content);
    var dataForSyte = JSON.stringify(contents);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("./user/src/articles.json", dataForSyte);

    res.send(content);
});
 // удаление статьи по id
app.delete("/aplic/contents/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("./client/src/contents_ready.json", "utf8");
    var contents = JSON.parse(data);

    var dataForSyte = fs.readFileSync("./user/src/articles.json", "utf8");
    var contentsForSyte = JSON.parse(dataForSyte);

    var index = -1;
    // находим индекс статьи в массиве
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем статью из массива по индексу
        var content = contents.splice(index, 1)[0];
        var data = JSON.stringify(contents);
        fs.writeFileSync("./client/src/contents_ready.json", data);
        var contentForSyte = contentsForSyte.splice(indexNew, 1)[0];
        var dataForSyte = JSON.stringify(contentsForSyte);
        fs.writeFileSync("./user/src/articles.json", dataForSyte);
        // отправляем удаленную статью
        res.send(content);
    }
    else{
        res.status(404).send();
    }
});
// изменение статьи
app.put("/aplic/contents", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var contentId = req.body.id;
    var titleText = req.body.title;
    var contextText = req.body.context;
    var timeText = req.body.time;
     
    var data = fs.readFileSync("./client/src/contents_ready.json", "utf8");
    var contents = JSON.parse(data);
    var content;
    for(var i=0; i<contents.length; i++){
        if(contents[i].id==contentId){
            content = contents[i];
            break;
        }
    }
    // изменяем данные у статьи
    if(content){
        content.context = contextText;
        content.title = titleText;
        content.time = timeText;
        var data = JSON.stringify(contents);
        fs.writeFileSync("./client/src/contents_ready.json", data);
        res.send(content);
    }
    else{
        res.status(404).send(content);
    }
});



// получение отправленных данных в архив
app.post("/api/archieve", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var titleText = req.body.title;
    var contextText = req.body.context;
    var timeText = req.body.time;
    var content = {title: titleText, context: contextText, time: timeText};
     
    var data = fs.readFileSync("./client/src/archieve.json", "utf8");
    var contents = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,contents.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    content.id = id+1;
    // добавляем статью в массив
    contents.push(content);
    var data = JSON.stringify(contents);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("./client/src/archieve.json", data);
    res.send(content);
});

var port = 3001;
app.listen(port, function(){
    console.log("Сервер ожидает подключения... " + port);
});