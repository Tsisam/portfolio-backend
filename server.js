const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./backend/routes/contactRoutes');
const userRoutes = require('./backend/routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ttimotew:iqVNE8TwgjV9OyVm@cluster0.r1kqvaq.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.log(' MongoDB error:', err));

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
