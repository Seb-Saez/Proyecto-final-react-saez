import { Link } from "react-router-dom";

const CategoryList = ()=>{
    return (
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/productos/men's clothing">Hombre</Link>
            </li>
            <li>
                <Link to="/productos/women's clothing">Mujer</Link>
            </li>
            <li>
                <Link to="/productos/jewelery">Joyeria</Link>
            </li>
            <li>
                <Link to="/productos/electronics">Electronica</Link>
            </li>
        </ul>
    )
}

export default CategoryList;

