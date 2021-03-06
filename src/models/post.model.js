const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        main: {
            type: String,
            required: true
        }
    },
    { timestamps: true}
)

module.exports = mongoose.model("post", postSchema);
