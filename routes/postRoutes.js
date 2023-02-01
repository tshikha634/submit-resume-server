const express = require("express");
const postController = require("../controllers/postRoutes");

const router = express.Router();

//POST /post
router.post("/post", postController.createPost);

router.get("/", postController.getPost);

module.exports = router;
