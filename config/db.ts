import { connect} from "mongoose"

export const connectDB = async() => {

    try {
       const conn = await connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify : false
       }) 
       console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}