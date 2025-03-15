import { useParams } from 'react-router'

const VideoPlayer = () => {
    const params = useParams();
    const id = params.id;
    return (
        <h1> Playing Video Id {id} </h1>
    )
}

export default VideoPlayer;