require('dotenv').config() 
const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes')
const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.use('/api', router)

// handle 404
app.use((req, res, next) => {
    res.status(404).send({
        message: 'not found!'
    })
})

// handle 500
app.use((err, req, res, next) => {
    res.status(500).send({
        message: 'internal server error!'
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})