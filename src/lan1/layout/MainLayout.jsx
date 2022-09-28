import "./MainLayout.scss";
import AddNote from "../component/AddNote";
import NodeList from "../component/NoteList";
function MainLayout() {
  return (
    <div className="main-layout">
      <h1>NHẮC NHỞ NGÀY QUAN TRỌNG CỦA BẠN</h1>
      <div className="main-content">
        <AddNote />
        <NodeList />
      </div>
    </div>
  );
}

export default MainLayout;
