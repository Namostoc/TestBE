import express from 'express'
import router from './route'
import BaseRouter from './route';
const app = express()
app.use(express.json({ limit: '10MB' }));

app.use('/api', BaseRouter);

export default app 