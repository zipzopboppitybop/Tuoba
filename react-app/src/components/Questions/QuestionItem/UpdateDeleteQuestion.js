import React, { useState, useEffect, useRef } from "react";
import DeleteQuestion from "../DeleteQuestion";
import UpdateQuestion from "../UpdateQuestion";
import UpdateDeleteModal from "../../Modals/UpdateDeleteModal";

function UpdateDeleteQuestion({ user, question }) {
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


  const ulClassName = "update-delete-dropdown" + (showMenu ? "" : " hidden");
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
              buttonText={<><i className="fa fa-pencil"> Edit Question</i></>}
              onItemClick={closeMenu}
              modalComponent={<UpdateQuestion question={question} />}
            />

            <UpdateDeleteModal
              buttonText={<><i className="fas fa-trash-alt"> Delete Question</i></>}
              onItemClick={closeMenu}
              modalComponent={<DeleteQuestion questionId={question?.id} />}
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

export default UpdateDeleteQuestion;
