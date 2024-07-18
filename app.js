const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/vi/tasks');
// app.post('/api/vi/tasks');
// app.post('/api/vi/tasks/:id');
// app.patch('/api/vi/tasks/:id');
// app.delete('/api/vi/tasks/:id');

app.listen(port, console.log(`Server is listening on port ${port}`));
