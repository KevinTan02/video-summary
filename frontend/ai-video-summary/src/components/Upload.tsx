import {useState} from 'react'

const Upload = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null)
    const [status, setStatus] = useState("")
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const file = e.target.files[0];
            setVideoFile(file);
        }
    }

    const handleSubmit = async () => {
        if(!videoFile) {
            setStatus("No video attached")
            return;
        }

        const formData = new FormData()
        formData.append('video', videoFile)

        try{
            setStatus("Uploading...")
            // todo: set up environment variables so we are not only on localhost
            // const response = await fetch("http://localhost:8080/api/upload", {
            //     method: 'POST',
            //     body: formData,
            // })
            const response = await fetch(`http://localhost:8080/greeting?name=${videoFile.name}`, {
                method: 'GET',
            })
            console.log('RESPONSE', response)

            if(!response.ok){
                throw new Error("Upload failed")
            }

            const jsonData = await response.json();
            console.log("JSON Data:", jsonData);

            setStatus("Upload successful!")
        } catch (error) {
            if(error instanceof Error) {
                setStatus(`Error: ${error.message}`)
            } else {
                setStatus("An unknown error ocurred")
            }
        }
    }


    return (
        <div>
            <h2>Upload Your Video</h2>
            <input type="file" accept="video/*" id="videoFile" onChange={handleFileChange}></input>
            <button onClick={handleSubmit}> Upload </button>
            <p>{status}</p>
        </div>
    )
}

export default Upload;