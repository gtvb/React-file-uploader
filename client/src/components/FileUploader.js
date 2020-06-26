import React, { useState } from 'react';
import axios from 'axios'

function FileUploader() {

  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('Choose File')
  const [selectedFile, setSelectedFile] = useState({
    filePath: '',
    fileName: ''
  })
  const [blobImage, setBlobImage] = useState()

  const handleChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
    setBlobImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleUpload = async e => {
    e.preventDefault()

    const data = new FormData()
    data.append('file', file)

    const res = await axios.post('http://localhost:5000/upload', data)

    const { path, originalname } = res.data

    setSelectedFile({filePath: path, fileName: originalname})

    setFile('')
    setFileName('Choose a File')
  }


  return (
      <>
        <div className="custom-file mb-4">
            <input type="file" className="custom-file-input" id="customFile" onChange={handleChange} />
            <label className="custom-file-label" htmlFor="customFile">{selectedFile.fileName}</label>
        </div>

        <button onClick={handleUpload} className='btn btn-primary btn-block mt-4'>Upload</button>

        {selectedFile.filePath !== '' ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{fileName}</h3>
              <img style={{width: '100%'}} className='img-responsive' src={blobImage} alt='' />
            </div>
          </div>
        ) : null}
      </>  
    );
}

export default FileUploader;