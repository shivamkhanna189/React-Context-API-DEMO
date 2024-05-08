import  UserList  from "./UserList"
import { useState ,useContext } from "react"
import UserContext from "../utils/UserContext"

const User = () => {
    const { users } = useContext(UserContext);
    const [user, setUser] = useState(users);

    const [userValue, setUserValue] = useState('')    
    const handleInputChange = (val) => {
        setUserValue(val)
    }

    const addUser = () => {
        const data = [...user , userValue]
        setUser(data)
    }

    const deleteUser = () => {
        const data = [...user]
        data.pop();
        setUser(data);
    }
    return (<div>
        <div>
            <h1>Add User</h1>
            <input type="text" onChange={ (event)=>handleInputChange(event.target.value)}></input>
            <button onClick={ ()=>addUser()}>Add User</button>
        </div>   
        <UserContext.Provider value={{users : user , deleteUser}}>
            <UserList></UserList>
        </UserContext.Provider>
    </div>)
}

export default User;