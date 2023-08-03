const { query, queryAll } = require('../helper/db')

const response = {
    success: false,
    message: 'Invalid Parameter',
    data: []
}

let status = 200

const addTransaksi = async (req, res) => {
    let { id_kategori, jumlah, catatan, tanggal } = req.body
    try {
        const queryAddTransaksi = `INSERT INTO transaksi_ (_id_kategori, _jumlah, _catatan, _tanggal)
                                VALUES(:id_kategori, :jumlah, :catatan, :tanggal)`
        const addTransaksi = await query(queryAddTransaksi, { id_kategori, jumlah, catatan, tanggal })
        if(addTransaksi){
            response.success = true
            response.message = 'Berhasil menambahkan transaksi'
        }
    } catch (error) {
        console.log(error);
        status = 500
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

const getTransaksi = async (req, res) => {
    let { id_user } = req.body
    try {
        const queryReadKategori = `SELECT k._id_jenis as id_jenis, k._kategori as kategori, 
                            t._id_transaksi as id_transaksi, t._jumlah as jumlah, t._catatan as catatan, 
                            DATE_FORMAT(t._tanggal, '%d-%m-%Y') as tanggal, DATE_FORMAT(t._waktu_insert, 
                            '%d-%m-%Y %H:%I:%s') as waktu_input 
                            FROM transaksi_ t INNER JOIN kategori_ k ON t._id_kategori=k._id_kategori 
                            WHERE k._id_user= :id_user`
        const [readKategori] = await queryAll(queryReadKategori, { id_user })
        console.log(readKategori);
        if(Object.keys(readKategori).length >= 1){
            response.success = true
            response.message = 'Berhasil mendapatkan data'
            response.data = readKategori
        } else {
            response.success = true
            response.message = 'Belum ada data'
            response.data = readKategori
        }
    } catch (error) {
        console.log(error);
        status = 500
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

const updateTransaksi = async (req, res) => {
    let { id_kategori, jumlah, tanggal, catatan } = req.body
    try {
        const queryUpdateTransaksi = `UPDATE transaksi_ SET _id_kategori= id_kategori, _jumlah= :jumlah, _tanggal= :tanggal,
                                    _catatan= :catatan WHERE _id_transaksi= :id_transaksi`
        const updateTransaksi = await query(queryUpdateTransaksi, { id_kategori, jumlah, tanggal, catatan })
        if(updateTransaksi){
            response.success = true;
            response.message = 'Berhasil update transaksi'
        }
    } catch (error) {
        console.log(error);
        status = 500
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

const deleteTransaksi = async (req, res) => {
    let { id_transaksi } = req.body
    try {
        const queryDeleteTransaksi = `DELETE FROM transaksi_ WHERE _id_transaksi= :id_transaksi`
        const deleteTransaksi = await query(queryDeleteTransaksi, { id_transaksi })
        if(deleteTransaksi){
            response.success = true;
            response.message = 'Berhasil delete transaksi'
        }
    } catch (error) {
        console.log(error);
        status = 500
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

module.exports = { addTransaksi, getTransaksi, updateTransaksi, deleteTransaksi }