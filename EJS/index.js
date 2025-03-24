import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("March 18, 2025");//this gets today's date
    const theDay = today.getDay();//this gets what day of the week
    //console.log(theDay);
    // To code for the index.ejs
    let type = "It's a weekday";
    let adv = "It's time to workhard";
    //0 is sunday and 6 is saturday, if it is weekend what to say
    if (theDay === 0 || theDay === 6) {
        type = "It's a weekend";
        adv = "It's time for fun; hURRAY!"
    }
    // to render the ejs file and pass type and adv as the variables
    res.render("index.ejs", {
        type,
        adv,
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });  