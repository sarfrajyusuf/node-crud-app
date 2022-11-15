const mongoose =require('mongoose');
const DB="mongodb+srv://sarfraj:3x958X5Cnc0DoTcy@cluster0.hxofu7f.mongodb.net/mernStack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('connection start')).catch((error)=>console.log(error.message))

//3x958X5Cnc0DoTcy