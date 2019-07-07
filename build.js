const path = require('path')
const cpy = require('cpy')
const rimraf = require('rimraf')

const dist = path.resolve(__dirname, './dist')

rimraf.sync(dist)
cpy(
  [
    require.resolve('pptxgenjs/dist/pptxgen.min'),
    require.resolve('pptxgenjs/dist/pptxgen.colors'),
    require.resolve('pptxgenjs/dist/pptxgen.shapes'),
    require.resolve('pptxgenjs/dist/pptxgen.d.ts'),
  ],
  dist
)
