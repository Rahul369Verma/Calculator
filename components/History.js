import React, { useEffect, useState } from 'react'

export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('history')
    if (data) {
      setHistory(JSON.parse(data).reverse())
    }
  }, [])

  const handleDelete = (value) => {
    let temp = history.filter((item) => {
      console.log(item, value);
      return item !== value
    })

    // Put the object into storage
    localStorage.setItem('history', JSON.stringify(temp));
    setHistory(temp)

    let trash = JSON.parse(localStorage.getItem("trash"));
    if (!trash) {
      trash = [];
    }
    let tempObject = value;
    trash.push(tempObject);

    // Put the object into storage
    localStorage.setItem('trash', JSON.stringify(trash));
  }

  return (
    <div className="container-table">
      <h2>History</h2>
      <ul className='responsive-table'>
        <li className="table-header">
          <div className="col-table col-table-1">Id</div>
          <div className="col-table col-table-2">Calculation</div>
          <div className="col-table col-table-3">Result</div>
          <div className="col-table col-table-4">Actions</div>
        </li>
        {history.map((item, index) => (
          <li className="table-row" key={index}>
            <div className="col-table col-table-1" data-label="id">{index}</div>
            <div className="col-table col-table-2" data-label="calculation">{item.one} {item.operation} {item.two}</div>
            <div className="col-table col-table-3" data-label="result">{item.result}</div>
            <div className="col-table col-table-4" data-label="Buttons">
              <button className='btn btn-danger' onClick={() => handleDelete(item)}>Delete</button></div>
          </li>
        ))}

      </ul>
    </div>
  )
}
