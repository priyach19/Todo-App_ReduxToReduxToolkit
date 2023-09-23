import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { addNote } from "../../redux/actions/noteActions";
import styles from "./NoteForm.module.css";
import { actions } from "../../redux/reducers/noteReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message=useSelector(notificationSelector);

  if(message){
    setTimeout(()=>{
      dispatch(resetNotification())
    },3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addNote(noteText))
    dispatch(actions.add(noteText))
    setNoteText("");
  };

  return (
    <div className={styles.noteContainer}>
       {message && 
      <div className="alert alert-success" role="alert">
       {message}
      </div>
      }
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
