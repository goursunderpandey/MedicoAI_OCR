const express = require("express");
const app = express()
const PORT = 3636;
require("../server/db")

app.listen(PORT,() => {
    console.log(` server running in ${PORT}`);
})