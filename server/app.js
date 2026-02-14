require('dotenv').config()

let Express=require('express')
let Cors=require('cors')

let App=Express()
App.use(Express.json({ limit: '10mb' }));
App.use(Express.urlencoded({ limit: '10mb', extended: true }));
App.use(Cors())

//DB
let Db=require('./db/db')
Db()

let ProductModel=require('./modal/productmodal')

//ADD PRODUCT
App.post('/product/add',async (req,res) => {
    let {ProductName, ProductDes, ProductPrice,ProductImg,ProductCategory}=req.body
    
    try{
        let Res=new ProductModel({ProductName, ProductDes, ProductPrice,ProductImg,ProductCategory})
        await Res.save()
        res.status(200).json({
            success:true,
            message:"Data Added Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

//GETTING PRODUCT
App.get('/product/get',async (req,res) => {
    try{
        let Res=await ProductModel.find()
        res.status(200).json({
            success:true,
            message:"Data Fetched Successfully",
            data:Res
        })
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

//UPDATE
App.put('/product/update/:id',async (req,res) => {
    
    let {ProductName,ProductDes,ProductPrice,ProductImg,ProductCategory}=req.body

    try{
        await ProductModel.findByIdAndUpdate( req.params.id,{ProductName,ProductDes,ProductPrice,ProductImg,ProductCategory},{new:true})
        res.status(201).json({
            success:true,
            message:"Product Updated"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })  
    }
})

App.delete('/product/delete/:id',async (req,res) => {
    try{
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(201).json({
            success:true,
            message:"Product Deletd"
        })
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })  
    }
})

let Bcrypt=require('bcrypt')

//USERS
let UserModel=require('./modal/usermodal')

//ADD
App.post('/users/add',async (req,res) => {
let {username,password,email,address,phno,gender}=req.body
    try{
    let ExistingUser=await UserModel.findOne({username})
    if(ExistingUser){
        return res.status(401).json({
            success:false,
            message:"User Already Exists"
        })
    } 
    let ExistingUserMail=await UserModel.findOne({email})
    if(ExistingUserMail){
        return res.status(401).json({
            success:false,
            message:"User Already Exists"
        })
    }   
    let genSalt=await Bcrypt.genSalt(10)
    let hashPassword=await Bcrypt.hash(password,genSalt)

    let newUser=new UserModel({username,password:hashPassword,email,address,phno,gender})
    await newUser.save()
    res.status(200).json({
        success:true,
        message:"SignedIn Successfully, Now Login to Explore Our Store"
    })
    }
    catch(err){
      res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })  
    }
})

let Jwt=require('jsonwebtoken')
let Nodemailer=require('nodemailer')

//LOGIN 

let Transporter=Nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_ADMIN,
        pass:process.env.EMAIL_PASSWORD
    }
})
App.post('/login/users/add',async (req,res) => {
    let {lname,lpass}=req.body
    try{

        if(!lname||!lpass){
            return res.status(400).json({
                success:false,
                message:"Please Provide Valid Input"
            })
        }

        let ExistingUser=await UserModel.findOne({username:lname})
        if(!ExistingUser){
            return res.status(401).json({
                success:false,
                message:"User Not Found"
            })
        }
        let PasswordComapre=await Bcrypt.compare(lpass,ExistingUser.password)
        if(!PasswordComapre){
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            })
        }
     let Token=Jwt.sign({
            Username:ExistingUser.username,
            Id:ExistingUser._id
        },process.env.SeceretKey)

     await Transporter.sendMail({
            from:process.env.EMAIL_ADMIN,
            to:ExistingUser.email,
            subject:"Login Succcessfully",
            text:`Hi, ${ExistingUser.username} 😊 Welcome To Sai Trends, You Have Successfully Logined Into Our Website, Happy Shopping 🛍️`
        })
        res.status(200).json({
            success:true,
            message:"Welcome To Sai Trends You Have Successfully Logined",
            token:Token,
            UserName:ExistingUser.username
        })
       
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

//GETTING USERS
App.get('/users/get',async (req,res) => {
    try{
        let getUsers=await UserModel.find()
        res.status(200).json({
            success:true,
            message:"Data Fetched",
            data:getUsers
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

let CartModel=require('./modal/addedpdct.js')

function AuthmiddleWare(req,res,next){
    let Header=req.headers.authorization
    if(!Header){
        return res.status(400).json({
            success:false,
            message:"Token Missing"
        })
    }
    let Token=Header.split(" ")[1]
    try{
        let Decoded=Jwt.verify(Token,process.env.SeceretKey)
        req.users=Decoded
        next()
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Invalid Token"
        })
    }
}

App.post('/cart/add', AuthmiddleWare, async (req, res) => {

    let { productId } = req.body
    let userId = req.users.Id

   

    try {

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID Missing"
            })
        }

        let productExists = await ProductModel.findById(productId)
        if (!productExists) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }

        let Cart = await CartModel.findOne({ userId })

        
        if (!Cart) {
            Cart = new CartModel({
                userId,
                Products: [
                    {
                        ProductId: productId,
                        Quantity: 1
                    }
                ]
            })
        }
        else {

            let productIndex = Cart.Products.findIndex((x) =>
                x.ProductId.toString() === productId
            )

            if (productIndex > -1) {
                Cart.Products[productIndex].Quantity += 1
            }
            else {
                Cart.Products.push({
                    ProductId: productId,
                    Quantity: 1
                })
            }
        }

        await Cart.save()

        res.status(200).json({
            success: true,
            message: "Product Added Successfully"
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})
App.get('/cart/get', AuthmiddleWare, async (req, res) => {

    let userId = req.users.Id

    try {

        let cartfind = await CartModel
            .findOne({ userId })
            .populate("Products.ProductId")

        if (!cartfind) {
            return res.status(200).json({
                success: true,
                data: { Products: [] }
            })
        }

        res.status(200).json({
            success: true,
            data: cartfind
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})


//REMOVE CART
App.delete('/cart/remove/:productId', AuthmiddleWare, async (req, res) => {

    let userId = req.users.Id
    let { productId } = req.params

    try {

        let Cart = await CartModel.findOne({ userId })

        if (!Cart) {
            return res.status(404).json({
                success: false,
                message: "Cart Not Found"
            })
        }

        let productIndex = Cart.Products.findIndex(
            (item) => item.ProductId.toString() === productId
        )

        if (productIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found In Cart"
            })
        }
        
        if (Cart.Products[productIndex].Quantity > 1) {
            Cart.Products[productIndex].Quantity -= 1
        } 
      
        else {
            Cart.Products.splice(productIndex, 1)
        }

        await Cart.save()

        res.status(200).json({
            success: true,
            message: "Product Removed"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: `ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

App.listen(process.env.PORT,()=>{
    console.log("Server Running Successfully");
    
})