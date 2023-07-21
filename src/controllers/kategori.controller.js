const { query, queryAll } = require('../helper/db')

const response = {
    success : false,
    message: 'invalid parameter',
    data: []
}

let status = 200

const addKategori = async (req, res) => {
    let { id_user, id_jenis, kategori } = req.body
    try {
        const queryCheckKategori = `SELECT _id_user AS id_user, _kategori AS kategori, _id_jenis AS id_jenis FROM kategori_ 
                                WHERE _kategori= :kategori`
        const [checkKategori] = await queryAll(queryCheckKategori, { kategori })
        console.log(checkKategori);
        if(Object.keys(checkKategori).length >= 1) {
            response.success = true
            response.message = 'kategori sudah ada'
            response.data = checkKategori
        }else {
            const queryAddKategori = `INSERT INTO kategori_ (_id_user, _id_jenis, _status, _kategori) 
                                VALUES(:id_user, :id_jenis, 1, :kategori)`
            const addKategori = await query(queryAddKategori, { id_user, id_jenis, kategori })
            console.log('tambah');
            console.log(addKategori);
            response.success = true
            response.message = 'berhasil menambahkan kategori'
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

const getKategori = async (req, res) => {
    let {  id_user, id_jenis, search } = req.body
    console.log(req.body)
    let condt = ''

    if(search){
        condt += ` AND _kategori LIKE '%${search}%'`
    }

    if(id_jenis){
        condt += ` AND _id_jenis= '${id_jenis}'`
    }

    try {
        const queryGetKategori = `SELECT _id_kategori AS id_kategori, _id_jenis AS id_jenis, _kategori AS kategori FROM kategori_ 
                                WHERE _status=1 AND _id_user= :id_user ${condt}`

        const [getKategori] = await queryAll(queryGetKategori, {
            id_user
        })
        console.log(getKategori)
        if (Object.keys(getKategori).length >= 1) {
            response.success = true;
            response.message = 'Berhasil mengambil data'
            response.data = getKategori;
        } else {
            response.success = true;
            response.message = 'Tidak ada data'
            response.data = getKategori
        }
    } catch (error) {
        console.log(error);
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

const udpateKategori = async (req, res) => {
    let { id_user, kategori, id_jenis, id_kategori } = req.body
    try {
        const queryUpdateKategori = `UPDATE kategori_ SET _id_jenis= :id_jenis, _kategori= :kategori WHERE _id_kategori= :id_kategori`
        const udpateKategori = await query(queryUpdateKategori, { id_user, kategori, id_jenis, id_kategori })
        if(udpateKategori){
            response.success = true;
            response.message = 'Berhasil update kategori'
        }
    } catch (error) {
        console.log(error);
        response.status = 500
        response.success = false
        response.message = error
    }

    return res.status(status).send(response)
}

const deleteKategori = async (req, res) => {
    let { id_kategori } = req.body
    try {
        const queryDeleteKategori = `DELETE FROM kategori_ WHERE _id_kategori= :id_kategori`
        const [deleteKategori] = await query(queryDeleteKategori, { id_kategori })
        if(deleteKategori){
            response.success = true;
            response.message = 'Berhasil hapus kategori'
        }
    } catch (error) {
        console.log(error);
        response.status = 500
        response.success = false
        response.message = error
    }
    return res.status(status).send(response)
}

module.exports = { addKategori, getKategori, udpateKategori, deleteKategori }