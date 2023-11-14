import chalk from 'chalk'
import { runWebpack } from './webpack.mjs'
import { compileSass } from './sass.mjs'
import { buildHTML } from './html.mjs'
import { cleanDist, cleanTeamMembers } from './clean.mjs'

async function runScripts () {
  const startTime = performance.now()
  cleanTeamMembers()
  await cleanDist()
  await Promise.all([
    runWebpack(),
    compileSass()
  ])
  buildHTML()
  const endTime = performance.now()
  console.log(chalk.yellow(`[scripts] completed in ${(endTime - startTime).toFixed(2)} milliseconds`))
}

runScripts()
