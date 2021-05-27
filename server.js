const express = require("express");
const path = require("path");
const fs = require("fs");



const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("assets"));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "notes.html")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/notes", (req, res) => {
    const data = fs.readFileSync("./db/db.json")
    const noteData = JSON.parse(data)
    res.status(200).json(noteData);
})

app.get("/api/notes/:id",(req, res)=>{
    const id = parseInt(req.params.id);
    const data = fs.readFileSync("./db/db.json")
    const noteData = JSON.parse(data);

    for (const note of noteData){
        if (id === note.id){
            res.json(note)
            return
        }
    }
    res.status(404).send("Cant find the Note")
})

app.post("/api/notes", (req, res)=>{
    const data = fs.readFileSync("./db/db.json")
    const noteData = JSON.parse(data);

    const note = req.body;

    const lastId = noteData[noteData.length-1].id

    note.id = lastId+1

    noteData.push(note)


    const jsonData = JSON.stringify(noteData);
    fs.writeFileSync("./db/db.json",jsonData)
    res.json(noteData)



})

app.listen(PORT, () => console.log(`listening to port ${PORT}`));