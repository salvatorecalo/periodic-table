import style from './App.module.css'
import {Table} from "./components";
function App() {
    return (
        <>
            <h1 className={style.title}>Periodic Table</h1>
            <Table />
        </>
    )
}

export default App
