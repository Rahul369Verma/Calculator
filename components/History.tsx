import React, { useEffect, useState } from "react";
import HistoryTable from "./HistoryTable";

export default function History() {
  const [history, setHistory] = useState([]);

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
    const data = localStorage.getItem("history");
    if (data) {
      let temp = JSON.parse(data).sort(compare);
      setHistory(temp);
    }
  }, []);

  const handleDelete = (value: ofItem) => {
    let temp = history.filter((item) => {
      console.log(item, value);
      return item !== value;
    });

    // Put the object into storage
    localStorage.setItem("history", JSON.stringify(temp));
    setHistory(temp);

    let trash: ofItem[] = JSON.parse(localStorage.getItem("trash") || "[]");
    let tempObject = value;
    trash.push(tempObject);

    // Put the object into storage
    localStorage.setItem("trash", JSON.stringify(trash));
  };

  return (
    <div className="text-center my-3 container">
      <h2>History</h2>
      <div >
        <HistoryTable handleDelete={handleDelete} data={history} />
      </div>
      {/* <ul className="responsive-table">
        <li className="table-header">
          <div className="col-table col-table-1">Id</div>
          <div className="col-table col-table-2">Calculation</div>
          <div className="col-table col-table-3">Result</div>
          <div className="col-table col-table-3">Created Date</div>
          <div className="col-table col-table-3">Created Time</div>
          <div className="col-table col-table-4">Actions</div>
        </li>
        {history.map((item: ofItem, index) => (
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
            <div className="col-table col-table-4" data-label="Buttons">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Trash
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
