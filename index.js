const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app listining on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request receved");
    // res.send({
    //     name: "ZIus",
    //     height: 511,
    // });
// });

// app.get("/", (req,res) => {
//     res.send("You contacted root path");
// });

// app.get("/orange", (req,res) => {
//     res.send("You contacted orange path");
// });

// app.get("/apple", (req,res) => {
//     res.send("You contacted apple path");
// });

// app.get("*" ,(req,res) => {
//     res.send("Path dosent exixt");
// });

app.post("/", (req,res) => {
    res.send("you sent post req to root");  
})

app.get("/:username/:id", (req,res) => {
    let {username , id} = req.params;
    res.send(`welcome to the page of @${username}`)
});

app.get("/search", (req,res) => {
    let {q} = req.query;
    res.send(`search result for querry: ${q}`);
});