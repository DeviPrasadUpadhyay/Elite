import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Perform upload logic here
            console.log('Uploading file:', selectedFile);
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div className="card">
            <div className="card-header">File Upload</div>
            <div className="card-body">
                <input type="text" placeholder="Username" className="username-input" />
                <input type="file" onChange={handleFileChange} className="file-input" />
                <button onClick={handleUpload} className="upload-button">Upload</button>
            </div>
        </div>
    );
};

export default FileUpload;
