import {Atom} from "../../interface/Atom.ts";

export function AtomCell({id, symbol, atomic_mass, electroNegativity}) {
    return (
        <article>
            <small>{id}</small>
            <h2>
                {symbol}
            </h2>
            <p>{atomic_mass}</p>
            <p>{electroNegativity}</p>
        </article>
    )
}