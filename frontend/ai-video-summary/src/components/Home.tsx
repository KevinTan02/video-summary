import { useState, useEffect } from 'react';

const Home = () => {
    const [key, setKey] = useState<string>('');

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            e.preventDefault()
            switch(e.key) {
                case ' ': 
                    setKey('Space')
                    console.log('something')
                break; 
                default : {
                    setKey(e.key)
                }
            }
            // if(e.key === ' ') {
            //     setKey('Space');
            // } else {
            //     setKey(e.key);
            // }

        }
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    },[])

    return (
        <div>
            <h1>Home - List of Videos</h1>

            <h2>{"You Pressed: " + key}</h2>
        </div>
    )
}

export default Home;