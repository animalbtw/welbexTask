const Router = require('express')
const router = new Router()
const tableItemRoute = require('./tableItmRoute')

router.use('/items', tableItemRoute)

module.exports = router