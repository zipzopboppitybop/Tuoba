import React, { useState, useEffect, useRef } from "react";
import DeleteAnswer from "../DeleteAnswer";
import UpdateAnswer from "../UpdateAnswer";
import UpdateDeleteModal from "../../Modals/UpdateDeleteModal";

function UpdateDeleteAnswer({ user, answer, question }) {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const ulClassName = "update-delete-dropdown answer-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button className="elipsis-container" onClick={openMenu}>
        <div className="elipsis">...</div>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <UpdateDeleteModal
              buttonText={<><i className="fa fa-pencil"> Edit Answer</i></>}
              onItemClick={closeMenu}
              modalComponent={<UpdateAnswer answer={answer} question={question} />}
            />

            <UpdateDeleteModal
              buttonText={<><i className="fas fa-trash-alt"> Delete Answer</i></>}
              onItemClick={closeMenu}
              modalComponent={<DeleteAnswer answerId={answer?.id} />}
            />
          </>
        ) : (
          <>
            ""
          </>
        )}
      </ul>
    </>
  );
}

export default UpdateDeleteAnswer;
