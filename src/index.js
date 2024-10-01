import express from "express"
import 'dotenv/config'
// import routes from "./routes/routes.js"
import connectDB from "./db/index.js"

// const app = express()
// const port = process.env.PORT


// app.get('/',(req ,res) =>{
//     res.send('Hello World')

// })

// app.listen(port , () =>{
//     console.log(`Our Sever is running on this port ${port}`)
// })

// app.use('/', routes)

connectDB()