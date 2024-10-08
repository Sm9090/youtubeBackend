import { app } from './app.js'
import 'dotenv/config'
import connectDB from "./db/index.js"


const port = process.env.PORT || 4000



try {
    await connectDB()
    app.on()

    app.listen(port , () =>{
    console.log(`Our Sever is running on this port ${port}`)
})
} catch (error) {
    console.log("MONGODB connection error !!!" , error)
}
