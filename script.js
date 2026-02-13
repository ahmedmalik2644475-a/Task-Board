//app.get("/profile/:username/"), function(req,res){
//     res.send(`Welcome, ${req.params.username}`);
// } );
// app.get("/author/:username/:age/:address", function(req,res){
//  res.send(`Welcome, ${req.params.username} of age ${req.params.age} of address${req.params.address}`)} );

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

app.post("/create", function (req, res) {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {},
  );
  res.redirect("/");
});

app.get("/file/:filename", function (req, res) {
  // 2. Logic is now correctly INSIDE the function block
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      if (err) {
        return res.status(404).send("Task not found");
      }

      // 3. Rendering the 'show.ejs' view and passing the data
      res.render("show", {
        filename: req.params.filename,
        filedata: filedata,
      });
    },
  );
});

app.get("/delete/:filename", function (req, res) {
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    console.log(err);
  });
  res.redirect("/");
});

app.get("/edit/:filename", function (req, res) {
  // 2. Logic is now correctly INSIDE the function block
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      if (err) {
        return res.status(404).send("Task not found");
      }
      // 3. Rendering the 'show.ejs' view and passing the data
      res.render("edit", {
        filename: req.params.filename,
        filedata: filedata,
      });
    },
  );
});
app.post("/update/:filename", function (req, res) {
  const oldPath = `./files/${req.params.filename}`;
  const newPath = `./files/${req.body.new}`; // Use the title input here
  // const newPath = req.body.new; // Use the title input here
  const newContent = req.body.newContent; // This matches the 'name' attribute in your HTML textarea

  fs.unlink(`./files/${req.params.filename}`, function (err) {
    console.log(err);
  });
  fs.writeFile(newPath, newContent, function (err) {});
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("its running..");
});
