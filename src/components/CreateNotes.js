import React, { useState } from 'react';
import { saveNoteName, } from '../lib/api'

import "./styles.css";

function CreateNotes() {

  const [Title, setTitleName] = useState(null);
  const [Description, setDescription] = useState(null);

  /* Add note */
  const saveNotes = async () => {
    await saveNoteName(Title, Description);
    
  }
 


  
  return (
    <div className="createnotes">
      <input type="text" onChange={e => setTitleName(e.target.value)} placeholder="Title Note" />
      <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Description Note" />
      <button onClick={saveNotes}>Save</button>
      
     
    </div>
  );
}
export default CreateNotes;