import mongoose from 'mongoose';

// Create mongoose schema
// Allows us to give uniformity to documents in MongoDB, validates that each post has the following schema.
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;