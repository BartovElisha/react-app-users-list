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
                users.length === 0 &&
                <Message
                    type="warning"
                    showButton={false}
                >
                    <span className="fw-bold">No Users To Show</span>
                </Message>
            }            
            <Message 
                type="danger"
                user={deletedUser}
                showButton={true}>
                User:
                <span className="fw-bold">
                    {deletedUser?.fullName}
                </span>
                has been deleted !!!
            </Message>                 
            <Message 
                type="success"
                user={newUser}
                showButton={true}>
                New user:
                <span className="fw-bold">
                    {newUser?.fullName}
                </span>has been added !!!
            </Message>                    
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