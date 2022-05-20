const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

app.get('/', (req, res) => { 
    console.log('Hello World');
    //res.send('Hello World');
    res.status(200).send('success');
});

app.use("/user", userRouter);

app.listen(PORT, () => console.log(`click http://localhost:${PORT}/ !`));