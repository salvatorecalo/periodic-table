import {useEffect, useState} from "react";
import {Atom} from "../../interface/Atom.ts";
import {AtomCell} from "../AtomCell/AtomCell.tsx";

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
    })

    return (
        <table>
            <tbody>
                <tr>
                    {
                        atoms && atoms.map((atom) => {
                            return (
                                <td key={atom.id}>
                                    <AtomCell
                                        id={atom.id}
                                        symbol={atom.symbol}
                                        atomic_mass={atom.atomic_mass}
                                        electroNegativity={atom.electronegativity_pauling}
                                    />
                                </td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}