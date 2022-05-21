const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

app.use(express.static("public"));
app.use(mylogger);

app.get('/', (req, res) => { 
    console.log('Hello World');
    res.status(200).send('success');
});

app.use("/user", userRouter);

//ミドルウェア
function mylogger(req, res, next) {
    console.log("middle",req.originalUrl);
    next();
}

app.listen(PORT, () => console.log(`click http://localhost:${PORT}/ !`));