import { useState } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Message from "../components/Message";
import Table from "../components/Table";
import Title from "../components/Title";
import { User } from "../models/Models";

function Home() {
    // App States
    const [users,setUsers] = useState<Array<User>>([]);
    const [newUser,setNewUser] = useState<User>();
    const [deletedUser,setdeletedUser] = useState<User>();

    function addUser(userToAdd: User) {
        const updated = [...users, userToAdd];
        // Must update users only by setUsers function, not Direct
        setUsers(updated);
        setNewUser(userToAdd);
    }

    function deleteUser(userToDelete: User) {
        const updated = users.filter(user => user.id !== userToDelete.id);
        setUsers(updated);
        setdeletedUser(userToDelete);
    }

    return (
        <>
            <Title content="Add User" />
            <MenuBar 
                addUser={addUser} />
            <Title content="Users List" />
            {
                deletedUser &&
                <Message 
                    type="success"
                    showMode={!!deletedUser}
                    >
                    User:
                    <span className="text-bold">
                        {deletedUser?.fullName}
                    </span>
                    has been deleted !!!
                </Message>                 
            }
            {
                newUser &&
                <Message 
                    type="success"
                    >
                    New user:
                    <span className="text-bold">
                        {newUser?.fullName}
                    </span>
                    has been added !!!
                </Message>                 
            }        
            {
                users.length === 0 && 
                <Message
                    type="warning"
                >
                    <span className="text-bold">No Users To Show</span>
                </Message>
            }
            {
                users.length !== 0 &&
                <Table 
                    users={users}
                    deleteUser={deleteUser}/>
            }                           
            <Footer />
        </> 
    );
}

export default Home;