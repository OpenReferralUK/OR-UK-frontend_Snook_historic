import { useState } from "react";

const SummaryButton = ({ summary }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!summary) return <span>-</span>;

  return (
    <>
      <button className="button-link" onClick={() => setIsOpen(true)}>
        Read
      </button>
      <div className={`modal-background ${isOpen ? "visible" : ""}`}>
        <div className="modal">
          <button
            className="close-button button-link"
            onClick={() => setIsOpen(false)}
          >
            close
          </button>
          {summary}
        </div>
      </div>
    </>
  );
};

export default SummaryButton;
