const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
    
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must having price']
  }
})



const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;