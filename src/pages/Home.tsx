import { useState } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Table from "../components/Table";
import Title from "../components/Title";
import { User } from "../models/Models";

function Home() {
    // App States
    const [users,setUsers] = useState<Array<User>>([]);

    function updateUsers(user: User) {
        // users.push(user);
        const updated = [...users, user];
        setUsers(updated);
    }

    function deleteUser(userId: number) {
        const updated = users.filter(user => user.id !== userId);
        setUsers(updated);
    }

    return (
        <>
            <Title content="Add User" />
            <MenuBar 
                updateUsers={updateUsers} />
            <Title content="Users List" />  
            {
                // Condition rendering
                // Example x.length === 0 ? 'Yes' : 'No'                
                users.length === 0 ? (
                    <p className="text-center mt-4"><strong>No Users In Database</strong></p>
                ):(
                    <Table 
                        users={users}
                        deleteUser={deleteUser}/>
                )
            }            
            <Footer />
        </> 
    );
}

export default Home;