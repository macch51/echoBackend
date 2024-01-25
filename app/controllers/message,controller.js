const Message = require('../models/message.model');

const sendMessage = async (req, res) => {
  try {
    const newMessage = new Message({
      sender: req.body.sender,
      receiver: req.body.receiver,
      content: req.body.content
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { sender, receiver } = req.query; 
    const messages = await Message.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages', error });
  }
};

module.exports = {
  sendMessage,
  getMessages
};
