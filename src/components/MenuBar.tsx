import { Statuses } from "../types/Types";

const statuses = Object.values(Statuses);

function MenuBar() {
    return (  
        <div className="container d-flex p-4 justify-content-between">
            <h4>User:</h4>
            <div className="d-flex">
                <input
                    className="form-control mx-2"
                    type="text"
                    placeholder="Full Name"
                ></input>
                <input
                    className="form-control mx-2"
                    type="email"
                    placeholder="Email Address"
                ></input>
                <select
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
                <button type="button" className="btn btn-info">Add</button>
            </div>            
        </div>
    );
}

export default MenuBar;