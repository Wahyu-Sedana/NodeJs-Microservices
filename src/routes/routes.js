const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const kategoriController = require('../controllers/kategori.controller')

router.post('/register', userController.tambahPengguna)
router.post('/login', userController.loginPengguna)

router.post('/addKategori', kategoriController.addKategori)
router.get('/getKategori', kategoriController.getKategori)
router.post('/updateKategori', kategoriController.udpateKategori)

module.exports = router