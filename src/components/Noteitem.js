import React from "react";
import NoteContext from '../context/notes/NoteContext'
import { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const {note, updateNote} = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="bi bi-trash3-fill mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully", "success");}}></i>
          <i className="bi bi-pencil-square mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
          <p className="card-text">{note.description}</p>
      </div>
    </div>
    </div>
  );
};

export default Noteitem;
