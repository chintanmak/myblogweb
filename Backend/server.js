const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

const multer = require('multer')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database connected"))

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images');
//     },  
//     filename: (req, file, cb)=>{
//         cb(null, Date.now() + '--' + file.originalname);
//     },
// })

// const upload = multer({storage: fileStorageEngine})

// app.post('/single', upload.single('image'), (req, res) => {
//     console.log(req.file);
//     res.send('single FILE upload success')
// });

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    methods: ["GET", "POST"],
    optionSuccessStatus: 200,
    preflightContinue: true,
    };


app.use(express.json())
app.use(cors(corsOptions))
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))

