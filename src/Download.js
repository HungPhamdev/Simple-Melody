import React from "react";
import { saveAs } from "file-saver";

const Download = (data) => {
  const handleDownload = (data) => {
    console.info("This is data: " + data);
    const file = new File([data], {
      type: "text/plain;charset=utf-8}",
    });
    saveAs(file, "hello_world.txt");
  };

  return (
    <button onClick={handleDownload} className="btn btn-success m-2">
      Download
    </button>
  );
};

export default Download;
