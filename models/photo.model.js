const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

const photoSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String
  },
  caption: {
    type: String
  },
  comment: [{
    type: String
  }],
  like: [{
    type: String
  }]
}, {
  timestamps: true
})

photoSchema.pre('update', function () {
  this.updated_at({}, {
    $set: {
      updated_at: new Date()
    }
  })
})

module.exports = mongoose.model('photos', photoSchema)
