import mongoose from "mongoose";

const { Schema } = mongoose;

const ItemSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
