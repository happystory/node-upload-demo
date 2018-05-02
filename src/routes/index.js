import express from 'express'
const router = express.Router()

router.get('/demo1', (req, res, next) => {
  res.render('demo1')
})

router.get('/demo2', (req, res, next) => {
  res.render('demo2')
})

export default router
