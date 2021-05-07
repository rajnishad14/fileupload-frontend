import React, { useState } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const FileUpload = () => {
  const [file, setFile] = useState([])
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const isUser = isAuthenticated && user
  const upload = (e) => {
    const files = e.target.files
    const fileReader = new FileReader()
    fileReader.readAsText(files[0], 'UTF-8')
    fileReader.onload = (e) => {
      let loadedFile = e.target.result
      setFile(JSON.parse(loadedFile.toString()))
    }
  }
  const handleUpload = async () => {
    file.forEach((item) => {
      axios
        .post('https://fileupload-backend-raj.herokuapp.com/', item)
        .then((res) => console.log(res))
    })
  }
  return (
    <div className="file-upload">
      {isUser ? (
        <button
          className="log"
          onClick={() => {
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout
        </button>
      ) : (
        <button className="log" onClick={loginWithRedirect}>
          Login
        </button>
      )}

      <input type="file" onChange={(e) => upload(e)} />
      <button
        onClick={() => {
          handleUpload()
        }}
      >
        upload
      </button>
      <div className="instruction">
        <p>Please Upload a .json file having data in the given format</p>
        <p className="json">
          [
          <br /> &nbsp; &#123;
          <br />
          &nbsp;&nbsp;&nbsp; id: 1,
          <br />
          &nbsp;&nbsp;&nbsp; userId: 1,
          <br />
          &nbsp;&nbsp;&nbsp; title: "title",
          <br />
          &nbsp;&nbsp;&nbsp; body: "body",
          <br /> &nbsp; &#125; ,
          <br />]
        </p>
      </div>
    </div>
  )
}

export default FileUpload
