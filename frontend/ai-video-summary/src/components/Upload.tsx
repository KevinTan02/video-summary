import {useState} from 'react'

const Upload = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null)
    const [status, setStatus] = useState("")
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setVideoFile(e.target.files[0]);
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
            const response = await fetch("/api/upload", {
                method: 'POST',
                body: formData,
            })

            if(!response.ok){
                throw new Error("Upload failed")
            }

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