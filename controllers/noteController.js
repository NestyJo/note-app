
const Note = require('../models/Note');

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content, userId: req.userId });
    await note.save();
    res.status(201).json(note);
};

exports.getNotes = async (req, res) => {
    const notes = await Note.find({ userId: req.userId });
    res.json(notes);
};

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    res.json(note);
};

exports.deleteNote = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).send();
};