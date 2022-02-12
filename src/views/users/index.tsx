import { useContext } from "react";
import ButtonMui from "../../components/button";
import StaticContext from "../../context/StaticContext";
import UserContext from "../../context/UserContext";

const UserView = () => {
    const staticContext = useContext(StaticContext);
    console.log(staticContext);
    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <div>
            <h1>Users</h1>
            <p>This is the users page</p>
            <ButtonMui text="Button" />
        </div>
    );
}

export default UserView;