const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const PostModel = require('./models/Post');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect("mongodb+srv://sahan:sahan@cluster1.phtm64z.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Multer storage setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// ------------------- Routes -------------------

// LOGIN
app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await UserModel.findOne({ name });

        if(!user) return res.json("User not found");

        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.json("Password is incorrect");

        if(user.role === "Admin") return res.json("success1");
        return res.json("success");

    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: "Server Error" });
    }
});

// REGISTER / CREATE USER
app.post('/', async (req, res) => {
    try {
        const { name, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = await UserModel.create({ name, password: hash });
        res.json(user);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// ADD POST
app.post('/addpost', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'subImages', maxCount: 10 }]), async (req, res) => {
    try {
        const { location, description } = req.body;

        // Safe checks for uploaded files
        const imagePath = req.files['image'] ? req.files['image'][0].path : null;
        const subImagePaths = req.files['subImages'] ? req.files['subImages'].map(f => f.path) : [];

        if (!location || !description || !imagePath) {
            return res.status(400).json({ error: "Location, description, and main image are required" });
        }

        const newPost = await PostModel.create({
            location,
            description,
            image: imagePath,
            subImages: subImagePaths
        });

        res.json(newPost);
    } catch (err) {
        console.error("AddPost Error:", err);
        res.status(500).json({ error: "Server Error" });
    }
});


// GET ALL POSTS
app.get("/gallery", async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// GET POST BY ID
app.get("/posts/:id", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if(!post) return res.status(404).json({ error: "Post not found" });
        res.json(post);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// DELETE POST
app.delete('/delete/:id', async (req, res) => {
    try {
        const result = await PostModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post deleted successfully', result });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// UPDATE POST
app.put("/update/:id", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'subImages', maxCount: 10 }]), async (req, res) => {
    try {
        const { location, description } = req.body;
        const post = await PostModel.findById(req.params.id);
        if(!post) return res.status(404).json({ error: "Post not found" });

        post.location = location || post.location;
        post.description = description || post.description;

        if(req.files['image']) post.image = req.files['image'][0].path;
        if(req.files['subImages']) post.subImages = req.files['subImages'].map(f => f.path);

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// Serve gallery by ID
app.get("/gallery/:id", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if(!post) return res.status(404).json({ error: "Post not found" });
        res.json(post);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
});

// ------------------- Start Server -------------------
app.listen(5000, '0.0.0.0', () => console.log("Backend running on port 5000"));
