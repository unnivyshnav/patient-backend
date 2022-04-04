const router = require("express").Router();

const Files = require("../models/Files");

//get
router.get("/", async (req, res) => {
  try {
    const file = await Files.find();

    res.status(200).json("hi");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
