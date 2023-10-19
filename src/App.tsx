import {useEffect} from "react";

function App() {

    async function loadData() {
        const data = fetch('https://kineticzephyr.onrender.com/periodictable')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    useEffect(() =>{
        loadData()
    })
    return <h1>Periodic Table</h1>
}

export default App
