import { app } from './app.js'
import connectDB from "./db/index.js"
import 'dotenv/config'


const port = process.env.PORT || 4000



try {
    await connectDB()
    app.on("error" ,() => "app connection failed")

    app.listen(port , () =>{
    console.log(`Our Sever is running on this port ${port}`)
})
} catch (error) {
    console.log("MONGODB connection error !!!" , error)
}
