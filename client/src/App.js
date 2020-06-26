import React from 'react';
import './App.css';

import FileUploader from './components/FileUploader'

function App() {

  return (
    <div className="container mt-4">
        <h4 className='display-4 text-center mb-4'>
          <i className='fab fa-react' style={{color: 'skyblue'}} /> React File Uploader
        </h4>

       <FileUploader />
    </div>
  );
}

export default App;
