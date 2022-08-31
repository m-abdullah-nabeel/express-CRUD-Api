import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Brand = new Schema({
  name: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: false
  }
});

const BrandModel = mongoose.model("brands", Brand);
export default BrandModel;
