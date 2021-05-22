// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
// const products = require('./data/products')
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


dotenv.config()
connectDB()
const app = express()
app.use(express.json())

// app.use((req,res,next)=>{
//     console.log('Hello')
//     console.log(req.originalUrl)
//     next()
// })





app.get('/', (req,res)=>{
    res.send('API is running..33.')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`.yellow.bold))