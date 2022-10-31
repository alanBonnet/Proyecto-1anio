// importacion de mongoose
const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conectado a la base de datos.")
    } catch (error) {
        console.log(`Hubo un error con conectar a la base de datos: ${error.message}`)
    }
}

module.exports = ConnectDB