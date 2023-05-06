const Post = require("../models/category.model");
const fs = require("fs");
module.exports = class API {
  //fetch all post
  static async fetchAllCategory(req, res) {
    try {
      const post = await Post.find();
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch post by id
  static async fetchCategoryByID(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }
  // create post
  static async createCategory(req, res) {
    const post = req.body;
    // const imagename = req.file.filename;
    // post.image = imagename;
    try {
      const result = await Post.create(post);
      // return res.post;
      return res.send(result);
      // res.status(201).json({ message: "post create successfull!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // update a post
  static async updateCategory(req, res) {
    const id = req.params.id;
    // let new_image = "";
    // if (req.file) {
    //   new_image = req.file.filename;
    //   try {
    //     fs.unlinkSync("./uploads/" + req.body.old_image);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // } else {
    //   new_image = req.body.old_image;
    // }
    const newPost = req.body;
    // newPost.image = new_image;

    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "update successfull!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // delete a post
  static async deleteCategory(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads" + result.image);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: "delete successfull!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
