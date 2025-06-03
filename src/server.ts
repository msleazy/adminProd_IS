import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'
import router from './router'
import db from './config/db'
import colors from 'colors'

//Conectar a bd
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        //console.log(colors.blue.bold('Conexión exitosa a la base de datos'))      
    } catch (error) {
        //console.log(error)
        console.log(colors.red.bold( 'Hubo un error al conectar a la BD'))
    }
    
}
connectDB()


//Instancia de express
const server = express()

//Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

//Para testear la conexión
server.get('/api', (req, res) => {
    res.json({ msg: 'Desde Api' })
})

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

export default server
