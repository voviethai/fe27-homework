import { useState } from "react";
import { localStorageNote } from "../const";
import { v4 as uuidv4 } from "uuid";
import { ROUTE } from "../const/index";
import "./AddNote.scss";
import { useNavigate } from "react-router-dom";
function AddNote(props) {
  const { set, get } = localStorageNote("NOTE_ITEM", []);
  const [titleDanger, setTitleDanger] = useState();
  const [dateDanger, setDateDanger] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const checkValiDate = () => {
    if (!title) {
      setTitleDanger("Bạn chưa nhập nội dung");
      return false;
    } else if (!date) {
      setDateDanger("Bạn chưa nhập ngày nhắc");
      return false;
    }
    return true;
  };
  const submitForm = (e) => {
    e.preventDefault();
    const isValid = checkValiDate();
    if (isValid) {
      const newNote = {
        title,
        date,
        id: uuidv4(),
      };
      const List = JSON.parse(get());
      set([newNote, ...List]);
      // const day = new Date();
      // console.log(date.getTime());
    }
  };
  return (
    <div className="add-note">
      <form className="add-form">
        <div className="form-title">
          <label htmlFor="" className="form-label">
            Nội Dung
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Nhập nội dung của ngày"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-date">
          <label className="form-label"> Ngày Nhắc</label>
          <input
            type="date"
            className="form-input"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button type="button" className="btn" onClick={submitForm}>
            Lưu Ngày
          </button>
        </div>
        <div className="form-danger">
          <span>{!title ? titleDanger : ""}</span>
          <span>{!date ? dateDanger : ""}</span>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
