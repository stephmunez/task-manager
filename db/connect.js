const mongoose = require('mongoose');

const uri =
  'mongodb+srv://sjtmunez:XUuuXsB8PhGTTjob@cluster0.smfcsuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = (url) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
