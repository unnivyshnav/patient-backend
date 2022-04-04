const router = require("express").Router();

const Files = require("../models/Files");

//get
router.get("/", async (req, res) => {
  try {
    const file = await Files.find();

    res.status(200).json(file);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", async (req, res) => {
//   const newFile = new File(req.body);
//   try {
//     const savedFile = await newFile.save();
//     res.status(200).json(savedFile);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
