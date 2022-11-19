import { useState } from "react";
import { User } from "../models/Models";
import { Statuses } from "../types/Types";

interface Props {
    updateUsers: Function;
}

const statuses = Object.values(Statuses);

function MenuBar({updateUsers}: Props) {

    // Menu States        
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [status,setStatus] = useState(Statuses.empty);

    function handleButtonClick() {
        // 1. Get...
        const user: User = {
            id: new Date().getMilliseconds(),
            fullName: fullName,
            email: email,
            status: status
        }     
        // 2. Update users Array by setUsers state function
        updateUsers(user);
    }

    return (  
        <div className="container d-flex p-4 justify-content-between">
            <h4>User:</h4>
            <div className="d-flex">
                <input
                    value={fullName}    
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control mx-2"
                    type="text"
                    placeholder="Full Name"
                ></input>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mx-2"
                    type="email"
                    placeholder="Email Address"
                ></input>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as Statuses)}
                    className="form-select mx-2">
                    {
                        statuses.map((status) => 
                            <option
                                key={status}
                                value={status}>
                                {status}
                            </option>
                        )
                    }    
                </select>
                <button 
                    onClick={handleButtonClick}
                    type="button" 
                    className="btn btn-info">Add</button>
            </div>            
        </div>
    );
}

export default MenuBar;