const express = require("express")
const colors = require("colors")
const moragan = require("morgan")
const dotenv = require("dotenv")


//dotenv config
dotenv.config();

//rest objects
const app = express();

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
app.get('/',(req,res) =>{
    res.status(200).send({
        message: "server running",
    })
})

// port
const port = process.env.PORT || 3000;
const mode = process.env.NODE_ENV || 'development';
//listen port
app.listen(port, () => {
    console.log(
        // `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white
        `Server is Running in ${mode} mode on port ${port}`         );
});
    
