import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import createAllTable from './lib/dbUtils.js';

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT"]
}))
app.use(express.json())
app.use('/auth', authRouter) 
app.get('/', (req, res) => {
    console.log("req.body")
})

const startServer = async () => {
  try {
    await createAllTable();   // ✅ await is valid here
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on port ${process.env.PORT}`)
    });
  } catch (error) {
    console.error("Failed to initialize the database", error);
    process.exit(1); // exit if db setup fails
  }
};

startServer();
