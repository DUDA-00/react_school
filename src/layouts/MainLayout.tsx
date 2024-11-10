import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () =>{
    return(
        <div>
            <Menu/>
            <Outlet/>

            <footer>
                <hr/>
                кінець
            </footer>

        </div>
    )
}

export default MainLayout;