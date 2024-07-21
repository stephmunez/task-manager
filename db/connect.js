const mongoose = require('mongoose');

const uri =
  'mongodb+srv://sjtmunez:XUuuXsB8PhGTTjob@cluster0.smfcsuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
