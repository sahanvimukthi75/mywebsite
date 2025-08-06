const mongoose =require('mongoose')

const PostSchema =new mongoose.Schema({
    location:String,
    description:String,
    image:String,
    subImages: [String], // Array of sub-image paths
    
    
})

const PostModel = mongoose.model("posts",PostSchema)
module.exports =PostModel