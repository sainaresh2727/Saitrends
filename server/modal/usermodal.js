let Mongoose=require('mongoose')

let Schema=new Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
})

let Model=Mongoose.model("UserDetails",Schema)

module.exports=Model