import React, { useEffect, useState } from "react";
import TrashTable from "./TrashTable";

export default function Trash() {
  const [trash, setTrash] = useState([]);

  type ofItem = {
    one: string;
    two: string;
    result: string;
    operation: string;
    id: number;
    createdDate: string;
    createdTime: string;
  };


  useEffect(() => {
    function compare(a: ofItem, b: ofItem) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    }
    const data = localStorage.getItem("trash");
    if (data) {
      setTrash(JSON.parse(data).sort(compare));
    }
  }, []);

  const handleDelete = (value: ofItem) => {
    let temp = trash.filter((item) => item !== value);
    // Put the object into storage
    localStorage.setItem("trash", JSON.stringify(temp));
    setTrash(temp);
  };

  const handleRestore = (value: ofItem) => {
    let history = JSON.parse(localStorage.getItem("history") || "[]");
    let tempArr = [...history, value];

    // Put the object into storage
    localStorage.setItem("history", JSON.stringify(tempArr));
    handleDelete(value);
  };

  return (
    <div className="text-center my-3 common-container">
      <h2>Trash</h2>
      <TrashTable handleDelete={handleDelete} handleRestore={handleRestore} data={trash} />
      {/* <ul className="responsive-table">
        <li className="table-header">
          <div className="col-table col-table-1">Id</div>
          <div className="col-table col-table-2">Calculation</div>
          <div className="col-table col-table-3">Result</div>
          <div className="col-table col-table-3">Created Date</div>
          <div className="col-table col-table-3">Created Time</div>
          <div className="col-table col-table-4 ms-4">Actions</div>
        </li>
        {trash.map((item: ofItem, index) => (
          <li className="table-row" key={index}>
            <div className="col-table col-table-1" data-label="id">
              {item.id}
            </div>
            <div className="col-table col-table-2" data-label="calculation">
              {item.one} {item.operation} {item.two}
            </div>
            <div className="col-table col-table-3" data-label="result">
              {item.result}
            </div>
            <div className="col-table col-table-3" data-label="result">
              {item.createdAt.split(",")[0]}
            </div>
            <div className="col-table col-table-3" data-label="result">
              {item.createdAt.split(",")[1]}
            </div>
            <div className="col-table col-table-4 d-flex justify-content-between" data-label="Buttons">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
              <button
                className="btn btn-success ms-3"
                onClick={() => handleRestore(item)}
              >
                Restore
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
