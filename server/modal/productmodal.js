let Mongoose=require('mongoose')

let Schema=new Mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductDes:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:String,
        required:true
    },
    ProductImg:{
        type:String,
        required:true
    },
    ProductCategory:{
        type:String,
        required:true
    },
})

let Model=Mongoose.model("ProductDetails",Schema)

module.exports=Model