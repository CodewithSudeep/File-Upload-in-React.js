import React from 'react'
import './App.css'

// @imports packages
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileWhitelist from './Utils/Whitelist'

export default function App() {
  const [file, setFile] = React.useState({ selectedFile: null, uploaded: false, warning: false })

  // @dev store the file in a state
  const handleselectedFile = e => {
    FileWhitelist(e.target.files[0]) ?
      setFile({
        selectedFile: e.target.files[0],
        uploaded: true, warning: false
      }) :
      setFile({ selectedFile: null, uploaded: false, warning: true })
  }

  // @dev handle upload to server
  const handleUpload = () => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const fileData = new FormData();
    fileData.append('uploadItem', file.selectedFile);

    // @dev the uri should be stored in environment file i.e. dynamic
    axios.post("http://localhost:8000/api/upload", fileData, config)
      .then(() => {
        toast.success("File Uploaded Successfully!");
        setFile({ selectedFile: null, uploaded: false, warning: false })
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {
        file.warning &&
        <div className="warning">
          Invalid file format! Only Images are allowed!
          </div>
      }
      <input type="file" name="" id="" onChange={handleselectedFile} className="file-input" />
      {
        file.uploaded && <button onClick={handleUpload}>Upload</button>
      }
      <ToastContainer />
    </div>
  )
}
