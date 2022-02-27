const express = require('express')
// require('../../config/passport')
// const passport = require('passport')
// const requireAuth = passport.authenticate('jwt', {
//     session: false
// })
const controller = require('../controllers/subirDocs.controller')

const router = express.Router()


/**
 * Ruta: /doc GET
 */
router.post(
    '/subirDoc',
    controller.upload,
    controller.uploadFile
)


module.exports = router