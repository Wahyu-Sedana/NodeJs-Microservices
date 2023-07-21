const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const kategoriController = require('../controllers/kategori.controller')
const transaksiController = require('../controllers/transaksi.controller')

router.post('/register', userController.tambahPengguna)
router.post('/login', userController.loginPengguna)

router.post('/addKategori', kategoriController.addKategori)
router.get('/getKategori', kategoriController.getKategori)
router.post('/updateKategori', kategoriController.udpateKategori)
router.post('/deleteKategori', kategoriController.deleteKategori)

router.post('/addTransaksi', transaksiController.addTransaksi)
router.get('/getTransaksi', transaksiController.getTransaksi)
router.post('/updateTransaksi', transaksiController.updateTransaksi)
router.post('/deleteTransaksi', transaksiController.deleteTransaksi)

module.exports = router