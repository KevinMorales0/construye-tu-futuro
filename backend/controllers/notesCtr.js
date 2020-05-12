const note = require("../models/mdNote")

const ctrlNotes = {};
ctrlNotes.getNotes = async (req, res) => {
    let notas = await note.find();
    res.json(notas);
    }

ctrlNotes.createNotes = async (req, res) => {
    let {id,title,contain,inBox} = req.body;
    const newNote = new note({
        title : title,
        contain : contain,
        inBox : inBox
    })
    await newNote.save();
    res.json({mensaje: "+N"});
}

ctrlNotes.upNote = async (req, res) => {
    let {title, contain, inBox} = req.body;
    await note.findOneAndUpdate({_id : req.params.id}, {
        title : title,
        contain : contain,
        inBox : inBox
    })
    res.json({mensaje: "U,N"})
    };

ctrlNotes.delNote = async (req, res) => {
    await note.findByIdAndDelete(req.params.id)
    res.json({mensaje: "X,N"})
    };



module.exports = ctrlNotes;