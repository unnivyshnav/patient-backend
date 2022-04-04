const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema(
  {
    files: { type: Array, default: ["url1", "url2", "url3"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Files", FilesSchema);
