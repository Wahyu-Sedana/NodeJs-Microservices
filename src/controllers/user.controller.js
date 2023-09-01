const db = require('../helper/db')
const moment = require('moment')
const crypto = require('crypto')

let response = {
  success: false,
  message: "invalid parameter",
  data: []
}

let status = 200;

const loginPengguna = async (req, res) => {
  let { email, password } = req.body
  let pass = crypto.createHash('md5').update(password).digest('hex')
  try {
    const [login] = await db.query("SELECT id_user AS id_user, _nama_usaha AS nama_usaha, _email AS email FROM user_ WHERE _email= :email AND _password= :password", {email, password: pass})
    console.log("data", login)
    if(Object.keys(login).length >= 1) {
      response.success = true
      response.message = "Berhasil login!"
      response.data = login
    }else {
      response.success = false
      response.message = "Email atau Password salah"
      response.data = login
    }
  } catch(err) {
    response.status = 500
    response.success = false
    response.message = err
  }
  return res.status(status).send(response)
}

const tambahPengguna = async (req, res) => {
  let { nama_usaha, alamat, email, password, tgl} = req.body
  tgl = moment().format('YYYY-MM-DD')
  try {
    const [checkEmail] = await db.queryAll("SELECT id_user AS id_user, _nama_usaha AS nama_usaha, _email AS email FROM user_ WHERE _email= :email AND _nama_usaha= :nama_usaha", {email, nama_usaha})
    console.log("data ada", checkEmail);
    if(Object.keys(checkEmail).length >= 1) {
      response.success = true
      response.message = "Pengguna sudah terdaftar"
      response.data = checkEmail
    }else {
      let pass = crypto.createHash('md5').update(password).digest('hex')
      let insertData = await db.query("INSERT INTO user_(_nama_usaha, _alamat, _email, _password, _tgl_register) VALUES(:nama_usaha, :alamat, :email, :password, :tgl)", {nama_usaha, alamat, email, password: pass, tgl})
      if(insertData){
        response.success = true
        response.message = "berhasil buat akun" 
      }else {
        response.success = false
        response.message = "coba lagi!"
      }
    }
  }catch(err) {
    response.status = 500
    response.success = false
    response.message = err
  }

  return res.status(status).send(response)
}

module.exports = { tambahPengguna, loginPengguna }