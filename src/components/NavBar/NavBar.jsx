import CategoryList from "../CategoryList/CategoryList"
import CompCarro from "../CompCarro/CompCarro"

const NavBar = ()=>{
    return (
        <nav className="navContainer">
            <CategoryList />
            <CompCarro />
        </nav>
    );
}

export default  NavBar