const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.post('/refresh-token', userCtrl.refreshToken)

router.get('/information', auth,  userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)


module.exports = router