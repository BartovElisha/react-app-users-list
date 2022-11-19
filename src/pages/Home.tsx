import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Table from "../components/Table";
import Title from "../components/Title";
import { User } from "../models/Models";
import { Statuses } from "../types/Types";

// const data = [
//     {
//         id: 1,
//         fullName: "Elisha Bartov",
//         status: Statuses.active,
//         email: "elisha.bartov@emerson.com"
//     },
//     {
//         id: 2,
//         fullName: "Elisha Bartov",
//         status: Statuses.active,
//         email: "alishe.b@gmail.com"
//     },
//     {
//         id: 3,
//         fullName: "Renata Fayziev",
//         status: Statuses.expired,
//         email: "renatulya.f@gmail.com"
//     },
//     {
//         id: 4,
//         fullName: "Evelin Bartov",
//         status: Statuses.banded,
//         email: "evelin.b@gmail.com"
//     }
// ];

function Home() {
    // App States
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [status,setStatus] = useState(Statuses.empty);
    const [users,setUsers] = useState<Array<User>>([]);
    // const [users,setUsers] = useState([...data]);

    function handleFullName(element: React.ChangeEvent<HTMLInputElement>) {
        // 1. Get Value from "Full Name" Input
        const value = element.target.value;       
        // 2. Update fullName
        console.log(value);
        setFullName(value); 
    }

    function handleEmail(element: React.ChangeEvent<HTMLInputElement>) {
        // 1. Get Value from "Email" input
        const value = element.target.value;
        // 2. Update email
        console.log(value);
        setEmail(value);
    }

    function handleStatusChange(element: React.ChangeEvent<HTMLSelectElement>) {
        // 1. Get Status from "Status" select input
        const value = element.target.value as Statuses;
        // 2. Update status
        console.log(value);
        setStatus(value);
    }

    function handleButtonClick() {
        // 1. Get...
        let user: User = {
            id: new Date().getMilliseconds(),
            fullName: fullName,
            email: email,
            status: status
        }        
        users.push(user);
        
        // 2. Update users
        setUsers(users);
    }

    return (
        <>
            <Title content="Add User"/>
            <MenuBar
                fullName={fullName}
                handleFullName={handleFullName}
                email={email}
                handleEmail={handleEmail}
                selectedStatus={status}
                handleStatusChange={handleStatusChange}
                handleButtonClick={handleButtonClick} 
            />
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