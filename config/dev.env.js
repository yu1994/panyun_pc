'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TEST_API: "'/api/'",
  BASE_API: "'http://10.0.21.157:8001/'"  /*http://apitest.getmoney.club/*/
})
