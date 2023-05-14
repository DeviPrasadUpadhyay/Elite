import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log("selecting video : ", event.target.files[0]);
    };

    const handleUpload = async () => {
        console.log("handling upload : ", selectedFile);

        if (selectedFile) {
            const formData = new FormData();
            formData.append('video', selectedFile);

            try {
                const response = await fetch('http://localhost:3001/upload', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    console.log('Video uploaded successfully!');
                    console.log('Uploading file:', selectedFile);
                } else {
                    console.error('Error uploading video:', response.status);
                }
            } catch (error) {
                console.error('Error uploading video:', error);
            }
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div className="card">
            <div className="card-header">File Upload</div>
            <div className="card-body">
                <input type="file" accept="video/*" onChange={handleFileChange} className="file-input" />
                <button onClick={handleUpload} className="upload-button">Upload Video</button>
            </div>
        </div>
    );
};

export default FileUpload;
