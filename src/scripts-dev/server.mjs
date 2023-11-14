import browserSync from 'browser-sync'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __dist = path.resolve(__dirname, '../../dist')

const bs = browserSync.create()
const app = express()
const PORT = 8081

export function server () {
  app.use(express.static(__dist))
  app.get('/', (req, res) => {
    res.sendFile(`${__dist}/capabilities.html`)
  })
  app.listen(PORT, () => {
    bs.init({
      proxy: `http://localhost:${PORT}`,
      files: [`${__dist}/**/*.*`],
      port: PORT - 1,
      open: false
    })
  })
}
