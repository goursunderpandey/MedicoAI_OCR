const express = require("express");
const app = express()
const PORT = 3636;


app.listen(PORT,() => {
    console.log(` server running in ${PORT}`);
})