import React from 'react'
import './App.css'

// @imports packages
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [file, setFile] = React.useState({ selectedFile: null, uploaded: false })

  // @dev store the file in a state
  const handleselectedFile = e => {
    setFile({
      selectedFile: e.target.files[0],
      uploaded: true
    })
  }

  // @dev handle upload to server
  const handleUpload = () => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const fileData = new FormData();
    fileData.append('uploadItem', file.selectedFile);

    // @dev the uri should be stored in environment file i.e. dynamic
    axios.post("http://localhost:8000/api/upload", fileData, config)
      .then(() => {
        toast.success("File Uploaded Successfully!")
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <input type="file" name="" id="" onChange={handleselectedFile} className="file-input" />
      {
        file.uploaded && <button onClick={handleUpload}>Upload</button>
      }
      <ToastContainer />
    </div>
  )
}
