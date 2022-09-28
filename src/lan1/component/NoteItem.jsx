import { useEffect, useState } from "react";
import { Route, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { localStorageKey, localStorageNote, ROUTE } from "../const";
import "./NoteItem.scss";
function NoteItem(props) {
  const { id } = props;
  // const navigate = useNavigate();
  const { set, get } = localStorageNote(localStorageKey.noteItem, []);
  // const { id } = useParams();
  const [noteItem, setNoteItem] = useState({
    id: uuidv4(),
    title: "",
    date: "",
  });
  useEffect(() => {
    const list = JSON.parse(get());
    const item = list.find((item) => item.id === id);
    // console.log(item);
    setNoteItem(item);
  }, [id]);
  const HandelDelete = (e) => {
    e.preventDefault();
    const list = JSON.parse(get());
    const index = list.findIndex((item) => item.id === id);
    // console.log(index);
    list.splice(index, 1);
    set(list);
  };
  return (
    <div className="note-item">
      <div className="title">Ngày: {props.date}</div>
      <div className="content">{props.title}</div>
      <span className="btn-clear" onClick={HandelDelete}>
        x
      </span>
    </div>
  );
}

export default NoteItem;
