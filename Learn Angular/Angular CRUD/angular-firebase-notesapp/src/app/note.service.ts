import { Injectable } from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc
} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private fs: Firestore) { }


  //Add new note code here
  addNote(note: Note) {
    note.id = doc(collection(this.fs, "id")).id;
    return addDoc(collection(this.fs, "Notes"), note);
  }

  //get all notes from database
  getNotes(): Observable<Note[]> {
    let notesRef = collection(this.fs, "Notes");
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>
  }

  //Delete note from database
  deleteNotes(note: Note) {
    let docRef = doc(this.fs, `Notes/${note.id}`);
    return deleteDoc(docRef);
  }

  //Update notes from database
  updateNote(note: Note, notes: any) {
    let docRef = doc(this.fs, `Notes/${notes.id}`);
    return updateDoc(docRef, notes);
  }


}

