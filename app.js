const express = require('express')
const app = express()
const port = 3000
const student = require("./routes/student")


app.use(express.json())

app.use("/students",student)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))