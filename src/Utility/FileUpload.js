import React, { useState } from 'react';
import './FileUpload.css';
import { BlobServiceClient } from "@azure/storage-blob";
const key = process.env.ACCESS_KEY;
const name = process.env.CONTAINER_NAME;

const blobServiceClient = BlobServiceClient.fromConnectionString(key); // new BlobServiceClient(key);
const containerClient = blobServiceClient.getContainerClient(name);

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            // Perform upload logic here
            const blockBlobClient = containerClient.getBlockBlobClient(selectedFile.name);
            const uploadResponse = await blockBlobClient.uploadData(selectedFile);
            console.log("Video uploaded successfully!");
            console.log('Uploading file:', selectedFile);
            console.log("Upload done with file request id : ", uploadResponse.requestId);
            console.log("DONE");
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
