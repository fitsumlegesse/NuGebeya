// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
// const products = require('./data/products')
import colors from 'colors'
import products from './data/products.js'


dotenv.config()
connectDB()
const app = express()

app.get('/', (req,res)=>{
    res.send('API is running..33.')
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`.yellow.bold))