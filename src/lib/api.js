import {db} from './firebase';
import { collection,getDocs,query,doc,addDoc,deleteDoc, updateDoc} from 'firebase/firestore';

export const saveNoteName = (title, description) =>{
     addDoc(collection(db,'notes'), {title, description});
}
 
export const getNotes = async () =>{
    const result = await getDocs(query(collection(db,'notes')));
    return result;
}

export const deleteNote = async (id)=>{
    await deleteDoc(doc(db,'notes', id));
}

export const updateNotes = async (id, title, description) => {
    await updateDoc(doc(db,'Persons',id),{title, description})
}