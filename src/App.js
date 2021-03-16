import React from 'react'
import './App.css'

export default function App() {
  const [file, setFile] = React.useState({ selectedFile: null, warning: false, uploaded: false })

  // this function check if the type of file is image/png or jpeg or not
  const handleselectedFile = e => {
    switch (e.target.files[0].type) {
      case 'image/png':
        setFile({
          selectedFile: e.target.files[0],
          warning: false,
          uploaded: true
        })
        break;

      case 'image/jpeg':
        setFile({
          selectedFile: e.target.files[0],
          warning: false,
          uploaded: true
        })
        break;

      // if not image return warning
      default:
        setFile({
          selectedFile: null,
          warning: true,
          uploaded: false
        })
        break;
    }
  }

  return (
    <div className="App">
      {
        file.warning && <div className="warning">Only Image format are allowed to upload!</div>
      }
      <input type="file" name="" id="" onChange={handleselectedFile} className="file-input" />
      {
        file.uploaded && <button>Upload</button>
      }
    </div>
  )
}
