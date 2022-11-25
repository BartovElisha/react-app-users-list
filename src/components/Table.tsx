import { User } from "../models/Models";
import TableRow from "./TableRow";

interface Props {
    users: User[];
    deleteUser: Function;
}

function Table({
    users,
    deleteUser}:Props) {
    return ( 
        <div className="container mt-5">
            <table className="table table-striped w-85">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Email</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        users.map((row) => 
                            <TableRow
                                key={row.id}
                                {...row}
                                deleteUser={deleteUser}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>        
    );
}

export default Table;