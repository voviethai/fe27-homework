import { useEffect, useState } from "react";
import { localStorageKey, localStorageNote } from "../const";
import NoteItem from "./NoteItem";
import "./NoteList.scss";
function NoteList(props) {
  const { id } = props;
  const { get } = localStorageNote(localStorageKey.noteItem, []);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const List = JSON.parse(get());
    setListData(List);
  }, [id]);
  return (
    <div className="note-list">
      {listData.map((item, key) => {
        return (
          <NoteItem
            key={key}
            id={item.id}
            title={item.title}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
