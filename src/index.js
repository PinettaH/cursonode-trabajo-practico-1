import 'dotenv/config.js'
import express from 'express';
import { router as cursoRouter } from './routes/cursoRouter.js';
import { connect } from './db/mongo.js';

const app = express();


connect();

app.use(express.json());
app.use('/curso', cursoRouter)

app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})
