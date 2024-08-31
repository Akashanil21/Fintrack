const express = require("express");
const app = express()
const path = require("path")

//////// view engine set up ///////////////////
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// configuration for serving static content in express 
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {

    res.render('index', { title: 'Fintrack', message: 'Welcome to Fintrack' })
})

app.get("/features",(req,res) => {

    res.send("Features page")
})

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server listening on port ${PORT}`);

})