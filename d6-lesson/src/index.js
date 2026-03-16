import express from 'express';
import 'dotenv/config'
import { router } from './routes/index.js';
import {connectDB} from "./config/database.js";
await connectDB()
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', router);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
app.listen(PORT, () => {
    console.log(`Application listen on portv${PORT}`);
})