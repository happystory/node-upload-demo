import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import index from './routes/index'
import upload from './routes/upload'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/upload', upload)

app.listen(1337, () => {
  console.log('Server running at http://127.0.0.1:1337/')
})
