const Router = require("express");
const {getNotes, createNotes, getNote, upNote, delNote} = require("../controllers/notesCtr")
const router = Router();



router.route("/")
    .get(getNotes)
    .post(createNotes)

router.route("/:id")
    .put(upNote)
    .delete(delNote)
    
module.exports = router;