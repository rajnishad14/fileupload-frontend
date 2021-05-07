import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetData = () => {
  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)
  const [clicked, setClicked] = useState(false)
  const GetData = async () => {
    setClicked(true)
    await axios('http://localhost:3002/').then((res) => {
      if (res.data) {
        console.log(res.data)
        setCheck(true)
        setData(res.data)
      }
    })
  }
  return (
    <div className="getdata">
      <button
        onClick={() => {
          GetData()
        }}
      >
        Get Data
      </button>
      <div className="all-data">
        {clicked && check ? (
          data.map((item, i) => {
            const { id, userId, title, body } = item
            return (
              <section className="data" key={i}>
                <p id="id">Id: {id}</p>
                <p id="user-id">UserId: {userId}</p>
                <p id="title">{title}</p>
                <p id="body">{body}</p>
              </section>
            )
          })
        ) : clicked ? (
          <p>No data has been uploaded</p>
        ) : (
          <p>To get data click on button</p>
        )}
      </div>
    </div>
  )
}

export default GetData
