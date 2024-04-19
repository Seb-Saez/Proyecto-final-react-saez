import CategoryList from "./CategoryList"
import CompCarro from "./CompCarro"

const NavBar = ()=>{
    return (
        <nav className="navContainer">
            <CategoryList />
            <CompCarro />
        </nav>
    );
}

export default  NavBar