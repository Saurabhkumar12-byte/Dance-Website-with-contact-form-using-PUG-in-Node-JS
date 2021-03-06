const express = require("express")
const app = express();
const path = require("path")
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home', params)
})
app.get("/contact", (req, res)=>{
    const params = {} 
    res.status(200).render('contact', params);
});

app.listen(port, ()=>{
    console.log(`app started on port ${port}`);
    
})