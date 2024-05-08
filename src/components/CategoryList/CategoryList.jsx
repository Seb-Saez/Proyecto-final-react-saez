import { Link } from "react-router-dom";

const CategoryList = ()=>{
    return (
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/#">Hombre</Link>
            </li>
            <li>
                <Link to="/#">Mujer</Link>
            </li>
            <li>
                <Link to="/#">Joyeria</Link>
            </li>
            <li>
                <Link to="/#">Electronica</Link>
            </li>
        </ul>
    )
}

export default CategoryList;

