// routes/contactRoute.js
import express from 'express';
import Contact from '../model/contact.js'

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ success: true, msg: 'Message sent' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;
