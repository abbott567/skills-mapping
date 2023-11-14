import * as sass from 'sass'
import postcss from 'postcss'
import cssnano from 'cssnano'
import jetpack from 'fs-jetpack'

export async function compileSass () {
  console.log('Sass attempting to compile')
  const resultSass = await sass.compile('src/sass/app.scss')
  const resultMinify = await postcss([cssnano]).process(resultSass.css, { from: undefined })
  await jetpack.write('dist/css/style.css', resultMinify.css)
  console.log('Sass compiled successfully')
}
