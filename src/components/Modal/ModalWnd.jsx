import "./ModalWnd.css";

export default function ModalWnd({ call }) {
  if (!call) {
    return null;
  }

  return (
    <div className="modal">
          <div className="modal-content">
              <i className="close">X</i>
        <h1>Видалити запис?</h1>
        <div className="btns">
          <button className="accept">Так, видалити</button>
          <button className="reject">Ні, залишити</button>
        </div>
      </div>
    </div>
  );
}
