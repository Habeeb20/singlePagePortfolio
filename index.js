const express = require("express");
const app = express()
const colors= require("colors")

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("portfolio.ejs")
})

const port = process.env.PORT || 1112;

app.listen(port, () => {
    console.log(`server is on at port 1112`.bgGreen.black)
});