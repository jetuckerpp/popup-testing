const express = require("express");
const session = require('express-session');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

app.use((req, res, next) => {
    const choice = req.query.choice || req.session.choice;
    if (choice != req.session.choice) {
        console.log("Setting choice:", choice);
        req.session.choice = choice;
    }

    console.log("CHOICE: ", choice);

    next();
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({message: `Hello there!`});
});

app.get("/api/choice", (req, res) => {
    const choice = req.session.choice;

    res.json({value: choice});
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});