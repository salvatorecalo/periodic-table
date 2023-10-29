import {useEffect, useState} from "react";
import {Atom} from "../../interface/Atom.ts";
import {AtomCell} from "../AtomCell/AtomCell.tsx";
import style from'./Table.module.css'

export function  Table() {
    const [atoms, setAtoms] = useState<Atom[]>([])
    function loadData() {
        fetch("https://kineticzephyr.onrender.com/periodictable")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAtoms(data.data)
                console.log(data.data)
            })
    }

    useEffect(() =>{
        loadData()
    },[])

    return (
        <div className={style.periodicTable}>
                    {
                        atoms && atoms.map((atom) => {
                            return (
                                    <AtomCell
                                        key={atom.id}
                                        id={atom.id}
                                        symbol={atom.symbol}
                                        atomic_mass={Math.round(atom.atomic_mass)}
                                        electronegativity_pauling={atom.electronegativity_pauling}
                                        category={atom.category}
                                    />
                            )
                        })
                    }
        </div>
    )
}