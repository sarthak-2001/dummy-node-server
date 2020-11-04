const express = require('express');
const app = express();
const port = 5005;

app.get('/hello',(req,res)=>{
    res.send('Hello people');
})

app.listen(port,()=>console.log('running on 5005');
)