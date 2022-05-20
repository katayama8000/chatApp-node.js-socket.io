const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("ユーザーリスト");
});

router.get("/info", (req, res) => {
    res.send("ユーザー情報");
});

//app.listen(PORT, () => console.log(`click http://localhost:${PORT}/ !`));

module.exports = router;