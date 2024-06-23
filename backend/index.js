const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const {AuthRoutes} = require('./routes/auth.routes');
const {CarRoutes} = require('./routes/car.routes');
const {OwnerRoutes} = require('./routes/owner.routes')


dotenv.config();


const port = process.env.port || 3300;  
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
//connecting to the server

mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to the server successfully');
}).catch((err)=>{
    console.log('Error occurred while connecting to db: ', err);
})


app.get('/', (req,res)=>{
   res.send(`welcome to VHMS system backend ✌️ `);
})

app.use('/auth',AuthRoutes);
app.use('/car', CarRoutes);
app.use('/owner', OwnerRoutes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});