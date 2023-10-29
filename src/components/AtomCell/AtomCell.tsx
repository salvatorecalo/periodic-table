import {Atom} from "../../interface/Atom.ts";
import style from  './AtomCell.module.css'
export function AtomCell({id, symbol, atomic_mass, electronegativity_pauling, category} : Atom) {

    function setColor() {
        if(category == 'alkaline metal' || category == 'alkali metal') {
            return 'red'
        } else if (category == 'alkaline earth metal') {
            return 'orange'
        } else if (category == 'metalloid'){
            return 'lightgreen'
        } else if (category == 'polyatomic nonmetal') {
            return 'lightblue'
        } else if (category == 'diatomic nonmetal') {
            return 'grey'
        } else if (category == 'noble gas') {
            return 'purple'
        } else if (category == 'transition metal') {
            return '#FFC300'
        } else if (category == 'lanthanide') {
            return 'whitesmoke'
        } else if (category == 'actinide') {
            return 'black'
        }
    }
    return (
        <article id={symbol} className={style.atom}
            style={{
                background: setColor()
            }}
        >
            <small>{id}</small>
            <h2>
                {symbol}
            </h2>
            <p>{atomic_mass}</p>
            <p>{electronegativity_pauling}</p>
        </article>
    )
}