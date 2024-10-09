import React, { useState } from "react";
import Model from "react-modal";

const Modal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>Open Model</button>
      <Model isOpen={visible} className="">
        <column>
          <row></row>
        </column>
      </Model>
    </div>
  );
};

export default Modal;
