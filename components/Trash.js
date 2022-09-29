import React, { useEffect, useState } from 'react'

export default function Trash() {
  const [trash, setTrash] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('trash')
    if (data) {
      setTrash(JSON.parse(data)?.reverse())
    }
  }, [])

  const handleDelete = (value) => {

    let temp = trash.filter((item) => item !== value)
    // Put the object into storage
    localStorage.setItem('trash', JSON.stringify(temp));
    setTrash(temp)
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
        {trash.map((item, index) => (
          <li className="table-row" key={index}>
            <div className="col-table col-table-1" data-label="id">{index}</div>
            <div className="col-table col-table-2" data-label="calculation">{item.one} {item.operation} {item.two}</div>
            <div className="col-table col-table-3" data-label="result">{item.result}</div>
            <div className="col-table col-table-4" data-label="Buttons">
              <button className='btn btn-danger' onClick={() => handleDelete(item)}>Permanent Delete</button></div>
          </li>
        ))}

      </ul>
    </div>
  )
}
