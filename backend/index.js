const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const PostModel = require('./models/Post');
const multer = require('multer');
const path = require('path');
const bcrypt=require('bcrypt')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from uploads

mongoose.connect("mongodb+srv://sahan:sahan@cluster1.phtm64z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
   
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Specify the filename
    },
});

const upload = multer({ storage: storage });

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    UserModel.findOne({ name: name })
        .then(user => {
            bcrypt.compare(password,user.password, (err,response)=>{
               if(err){
                res.json("the password is incorrect")
               } 
               if (user.role === "Admin") {
                res.json("success1")
                 } else {
                    res.json("success")
                    console.log(user.role)
            }
           
            })         
            
            
        })
        .catch(err => res.json(err));
});

app.post('/addpost', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'subImages', maxCount: 10 }]), (req, res) => {
    const { location, description } = req.body;
    const imagePath = req.files['image'][0].path;
    const subImagePaths = req.files['subImages'].map(file => file.path);
  
    const newPost = new PostModel({
      location,
      description,
      image: imagePath,
      subImages: subImagePaths,
    });
  
    newPost.save()
      .then(post => res.json(post))
      .catch(err => res.json(err));
  });

  
app.get("/gallery", (req, res) => {
    PostModel.find()
        .then(posts => res.json(posts))
        .catch(err => {
            console.error('Error fetching posts:', err);
            res.status(501).json({ error: 'Server Error' });
        });
});

app.get("/details", (req, res) => {
    PostModel.find()
        .then(posts => res.json(posts))
        .catch(err => {
            console.error('Error fetching posts:', err);
            res.status(501).json({ error: 'Server Error' });
        });
});

app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    PostModel.findById(id)
      .then(post => res.json(post))
      .catch(err => {
        console.error('Error fetching restaurant:', err);
        res.status(502).json({ error: ' Server Error' });
      });
  });
  

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    PostModel.findByIdAndDelete(id)
      .then(result => res.json({ message: 'Restaurant deleted successfully', result }))
      .catch(err => res.json(err));
  });

  app.put("/update/:id", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'subImages', maxCount: 10 }]), (req, res) => {
    const { id } = req.params;
    const { location, description } = req.body;
    let updateData = { location, description };
    
    if (req.files['image']) {
        updateData.image = req.files['image'][0].path;
    }

    if (req.files['subImages']) {
        updateData.subImages = req.files['subImages'].map(file => file.path);
    }

    PostModel.findById(id)
        .then(post => {
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }

            
            post.location = location || post.location;
            post.description = description || post.description;
            post.image = updateData.image || post.image;
            post.subImages = updateData.subImages.length > 0 ? updateData.subImages : post.subImages;

            // Save the updated post
            return post.save();
        })
        .then(updatedPost => res.json(updatedPost))
        .catch(err => {
            console.error('Error updating restaurant:', err);
            res.status(503).json({ error: ' Server Error' });
        });
});
  

app.get("/gallery/:id", (req, res) => {
    const { id } = req.params;
    PostModel.findById(id)
      .then(post => res.json(post))
      .catch(err => {
        console.error('Error fetching post:', err);
        res.status(500).json({ error: 'Server Error' });
      });
  });
  

app.post('/', (req, res) => {
    const {name,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash =>{
        UserModel.create({name,password:hash})
        .then(users => res.json(users))
        .catch(err => res.json(err));

    }) .catch(err =>console.log(err.message))
   
});

app.listen(5000, '0.0.0.0', () => {
    console.log("server is running on port 5000");
});
