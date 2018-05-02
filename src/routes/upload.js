import { resolve } from 'path'
import fs from 'fs'
import express from 'express'
import multiparty from 'multiparty'
const router = express.Router()

router.post('/', function(req, res, next) {
  const form = new multiparty.Form()
  form.parse(req, function(err, fields, files) {

    console.log(files)

    if (err) {
      console.log(error)
    } else {
      files.file.forEach(file => {
        const { originalFilename, path } = file
        fs.rename(path, resolve(__dirname, '../uploads', originalFilename), (err, data) => {
          if (err) throw new Error(err)
          res.json({
            errno: 0,
            message: '保存成功'
          })
        })
      })
    }
  })
})

export default router
