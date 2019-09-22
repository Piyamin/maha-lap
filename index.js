const express = require("express");
const Mahalap = require("./maha-lap");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/twofivezwro", (req, res) => {
    const day = req.query.day;
    const story = req.query.story;
    const time = req.query.time;
    const theHolyNumber = Mahalap.twofivezero(day, story, time);
    res.json({
        reult: theHolyNumber
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));