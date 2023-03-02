const express = require("express");
const app = express();
const useRoutes=require("./routes/useRoutes")
app.use(express.json());
const port = 3002;

app.use("/users",useRoutes);

// app.post("/", (req, res) => {
//     let a = parseInt(req.query.a);
//     let b = parseInt(req.query.b);
//     let name = req.query.name;
//     let c = a + b;
//     res.send({ result: c, user: name });
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// in terminal:
// npm i nodemon -g
// nodemon index.js
