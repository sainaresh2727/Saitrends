let Mongoose=require('mongoose')

let Schema=new Mongoose.Schema({
    userId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"UserDetails",
        required:true
    },
    Products:[
        {
            ProductId:{
                type:Mongoose.Schema.Types.ObjectId,
                ref:"ProductDetails"
            },
            Quantity:{
                type:Number,
                default:1
            }
        }
    ]
})

let Model=Mongoose.model("AddedItems",Schema)

module.exports=Model