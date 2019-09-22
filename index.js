const express = require("express");
const Mahalap = require("./maha-lap");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ด้วยมนต์250"));

app.use("/public", express.static("public"));

app.get("/namo", (req, res) => {
    const day = req.query.day;
    const story = req.query.story;
    const time = req.query.time;
    console.log(day, story, time);
    const theHolyNumber = Mahalap.TwoFiveZero(day, time, story);
    res.json({
        result: theHolyNumber
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));