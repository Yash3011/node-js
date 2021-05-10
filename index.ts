import express, {Application, json, urlencoded} from 'express';
import helmet from 'helmet';
import {connectDB} from './config/db'
import {addressRoute} from './routes/addressRoute';
import {userRoute} from './routes/userRoute';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler'

dotenv.config()
connectDB();
const app  = express();

app.use(helmet())
app.use(json())
app.use(urlencoded({extended:true}))
app.use('/api/address',addressRoute)
app.use('/api/user',userRoute)
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT,() => console.log(`Listening on Port ${PORT}`))