import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote, updateNotes } from '../lib/api'
import "./styles.css";
import { Card } from "react-bootstrap";

function Notes() {

  const [Notes, setNotes] = useState(null);
  const [NotesId, setNotesId] = useState(null);
  const [Title, setTitleName] = useState(null);
  const [Description, setDescription] = useState(null);



  /* Get Data */
  useEffect(() => {
    getNotesData();
  }, [])
  const getNotesData = async () => {
    const p = await getNotes();
    setNotes(p.docs);

  }

  /* Delete note */
  const removeNote = async () => {
    await deleteNote(NotesId);
    getNotesData();
  }

  /* Edit note */
  const updateNoteData = async () => {
    await updateNotes(NotesId, Title, Description);
    getNotesData();
  }

  return (
    <div>
    <div className="notes">

      {Notes && Notes.map(p => <div className="notesindiv" key={Title}>
        <Card style={{ width: "18rem" }} className="box">
          ID:{p.id}
          <Card.Title>Title: {p.data().title} </Card.Title>
          <Card.Text>Description:{p.data().description}</Card.Text>
        </Card>
      </div>)}
      </div>
      <div className="edit-remove">
        <div>
          <input type="text" onChange={e => setNotesId(e.target.value)} placeholder="ID" />
          <button onClick={removeNote}>Eliminar</button>
        </div>
        <div>
          <input type="text" onChange={e => setNotesId(e.target.value)} placeholder="ID" />
          <input type="text" onChange={e => setTitleName(e.target.value)} placeholder="Title Note" />
          <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Description Note" />
          <button onClick={updateNoteData}>Editar</button>
        </div>
      </div>

    </div>
  );
}
export default Notes;