import { User } from "../models/Models";
import TableRow from "./TableRow";

interface Props {
    users: User[];
}

function Table({users}:Props) {
    return ( 
        <div className="container mt-5">
            <table className="table table-striped w-85">
                <thead>
                    <tr>
                    <th scope="col">#</th>
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
                            />
                        )
                    }
                </tbody>
            </table>
        </div>        
    );
}

export default Table;