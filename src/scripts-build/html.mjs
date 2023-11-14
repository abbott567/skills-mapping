import htmlmin from 'html-minifier'
import nunjucks from 'nunjucks'
import jetpack from 'fs-jetpack'
import { getCompiledCSS, getCompiledScripts } from './utilities.mjs'

export function buildHTML () {
  console.log('HTML attempting to compile')
  const teamMembers = jetpack.read('src/data/team-members.json', 'json')
  nunjucks.configure('src/views', {
    autoescape: true
  })
  const style = getCompiledCSS()
  const scripts = getCompiledScripts()
  const html = nunjucks.render('capabilities.njk', {
    style,
    scripts,
    teamMembers
  })
  const minifiedHtml = htmlmin.minify(html, {
    removeComments: true,
    collapseWhitespace: true
  })
  jetpack.write('dist/capabilities.html', minifiedHtml)
  console.log('HTML compiled successfully')
}
