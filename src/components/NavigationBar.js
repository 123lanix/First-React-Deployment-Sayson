import { Link } from "react-router-dom";
const NavigationBar = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Work">
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/Cart">
                        Cart
                    </Link>
                    {/* <a href="/Cart">Cart</a> */}
                </li>
                <li>
                    <Link to="/HookUse">
                        Use Reference Hook Sample
                    </Link>
                </li>
                <li>
                    <Link to="/HookReducer">
                        Use Reducer Hook Sample
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default NavigationBar;