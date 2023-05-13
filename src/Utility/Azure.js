// import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

// const key = process.env.ACCESS_KEY;
// const name = process.env.CONTAINER_NAME;

// // const blobServiceClient = new BlobServiceClient("<connection-string-or-access-key>");
// // const containerClient = blobServiceClient.getContainerClient("<container-name>");
// const blobServiceClient = new BlobServiceClient(key);
// const containerClient = blobServiceClient.getContainerClient(name);
// const handleFileUpload = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//         const blockBlobClient = containerClient.getBlockBlobClient(file.name);
//         await blockBlobClient.uploadBrowserData(file);
//         console.log("Video uploaded successfully!");
//     }
// };
// const Azure = () => {

//     return (
//         <div>
//             <input type="file" onChange={handleFileUpload} />
//         </div>
//     );
// };
// export default Azure;
