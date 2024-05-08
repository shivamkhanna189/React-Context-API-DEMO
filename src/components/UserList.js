
import UserContext from "../utils/UserContext"
import { useContext } from "react"

const UserList = () => {
    const { users, deleteUser } = useContext(UserContext)
    return (<div>
        {
            users.map((user, index) => <h1 key={index} onClick={ ()=>deleteUser()}>{ user}</h1>)
        }
    </div>)
}

export default UserList;