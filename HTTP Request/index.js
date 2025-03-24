import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Beny! You are doing well");
});
app.get("/about", (req, res) => {
    res.send("<h1>Feel free to ask about me</h1><p>I am suceeding and Victorious</p>");
});
app.get("/contact", (req, res) =>{
    res.send("<h2>Call me when you can</h2><p>My email is igetbacking@heaven.place");
});
app.listen(port, () => {
    console.log("server running on port " + port);
});