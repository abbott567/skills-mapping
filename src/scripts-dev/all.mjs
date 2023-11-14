import { server } from './server.mjs'
import watch from './watch.mjs'

async function runScripts () {
  await server()
  watch.all()
}

runScripts()
