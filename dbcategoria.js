var dbConnect = require("./dbconect");
const sql = require('mssql')

async function getCategoria(){
    try {
        let pool = await sql.dbConnect(dbConnect);
        let categorias = await pool.request().query("select * from Categoria");
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    getCategoria : getCategoria
}