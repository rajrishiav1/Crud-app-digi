const mongoose = require('mongoose')
const DB='mongodb+srv://root:qwerty1234@cluster0.bcejgzz.mongodb.net/mernstack?retryWrites=true&w=majority'


mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})