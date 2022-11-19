import { Statuses } from "../types/Types";

interface Props {
    fullName: string;
    handleFullName: Function;
    email: string;
    handleEmail: Function;
    selectedStatus: string;
    handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleButtonClick: Function;
}

const statuses = Object.values(Statuses);

function MenuBar({
        fullName,
        handleFullName,
        email,
        handleEmail,
        selectedStatus,
        handleStatusChange,
        handleButtonClick}: Props) {
    return (  
        <div className="container d-flex p-4 justify-content-between">
            <h4>User:</h4>
            <div className="d-flex">
                <input
                    value={fullName}    
                    onChange={(e) => handleFullName(e)}
                    className="form-control mx-2"
                    type="text"
                    placeholder="Full Name"
                ></input>
                <input
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    className="form-control mx-2"
                    type="email"
                    placeholder="Email Address"
                ></input>
                <select
                    value={selectedStatus}
                    onChange={handleStatusChange}
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
                    onClick={() => handleButtonClick()}
                    type="button" 
                    className="btn btn-info">Add</button>
            </div>            
        </div>
    );
}

export default MenuBar;