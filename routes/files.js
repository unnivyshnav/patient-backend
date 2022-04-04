const router = require("express").Router();

const Files = require("../models/Files");

//get
router.get("/", async (req, res) => {
  try {
    console.log("hi");
    const file = await Files.find();
    console.log(file);
    res.status(200).json(file);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
