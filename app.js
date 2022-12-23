const express = require('express')
const app = express();
const PORT = 5000

//Middleware will execute and make the necessary changes
//before executing get request.
const customMiddleware = (res, req, next) => {
    console.log("middleware executed!");
    next();
}

app.use(customMiddleware);

app.get('/', (req, res) => {
    console.log('Home')
    res.send('Hello World')
});

app.get('/about', (req, res) => {
    console.log('About')
    res.send('About us')
});

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})
