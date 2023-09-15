import express from 'express';
import router from './routes/starRouter.js'

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ', PORT)
})
