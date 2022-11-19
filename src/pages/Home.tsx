import { useState } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Table from "../components/Table";
import Title from "../components/Title";
import { Statuses } from "../types/Types";

const data = [
    {
        id: 1,
        fullName: "Elisha Bartov",
        status: Statuses.active,
        email: "elisha.bartov@emerson.com"
    },
    {
        id: 2,
        fullName: "Elisha Bartov",
        status: Statuses.active,
        email: "alishe.b@gmail.com"
    },
    {
        id: 3,
        fullName: "Renata Fayziev",
        status: Statuses.expired,
        email: "renatulya.f@gmail.com"
    },
    {
        id: 4,
        fullName: "Evelin Bartov",
        status: Statuses.banded,
        email: "evelin.b@gmail.com"
    }
];

function Home() {

    // const [users,setUsers] = useState([]);
    const [users,setUsers] = useState([...data]);

    return (
        <>
            <Title content="Add User"/>
            <MenuBar />
            <Title content="Users List"/>  
            {
                // Condition rendering
                // Example x.length === 0 ? 'Yes' : 'No'                
                users.length === 0 ? (
                    <p className="text-center mt-4"><strong>No Users In Database</strong></p>
                ):(
                    <Table users={users}/> 
                )
            }            
            <Footer />
        </> 
    );
}

export default Home;