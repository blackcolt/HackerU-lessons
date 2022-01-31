const app = require("express")(),
  mongoose = require("mongoose"),
  Post = require("./models/post"),
  User = require("./models/user"),

  port = 3000;

app.get("/", async (req, res) => {
  Post.find().then((docs)=>{
    const post =  docs[0].populate('user').then((err, post)=>{
      console.log(post)
    })
    // exec(function (err, post) {
    //   console.log(post)
    // })
    // .exec().then(post=>{
    //   console.log(post);
    // })
    console.log(post)
    res.json({ hello: "world" });

    // User.findById(docs[0].user).then(user=>{
    //   console.log(user)
    // })
    // console.log(docs);
  })
});
mongoose
  .connect("mongodb://0.0.0.0:27017/relation")
  .then(() => {
    // const user = new User({"name": "idan"})
    // user.save((err, doc)=>{
    //     const post = new Post({ text: "sdasdas", user: doc.id });
    //     post.save().then((err, doc) =>{
    //     console.log(doc)
    // });
    // })
    // post.testFunc()

    app.listen(port, () => {
      console.info(`start server start listening on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
