import watch from 'node-watch'
import { compileSass } from '../scripts-build/sass.mjs'
import { runWebpack } from '../scripts-build/webpack.mjs'
import { cleanTeamMembers } from '../scripts-build/clean.mjs'
import { buildHTML } from '../scripts-build/html.mjs'

async function watchSass () {
  watch('src/sass', { recursive: true }, compileSass)
}

async function watchClientJS () {
  watch('src/scripts-browser', { recursive: true }, runWebpack)
}

async function watchCapabilities () {
  watch('src/data/capabilities.json', async () => {
    await cleanTeamMembers()
    await runWebpack()
    buildHTML()
  })
}

async function watchTeamMembers () {
  watch('src/data/team-members.json', async () => {
    await runWebpack()
    buildHTML()
  })
}

function all () {
  if (process.env.NODE_ENV !== 'dev') return
  watchSass()
  watchClientJS()
  watchCapabilities()
  watchTeamMembers()
}

export default { all }
