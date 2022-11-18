import { Statuses } from "../types/Types";
import TableRow from "./TableRow";

function Table() {

    const users = [
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
        },
        {
            id: 5,
            fullName: "Tomer Babamuratov",
            status: Statuses.banded,
            email: "tomer.b@gmail.com"
        },
        {
            id: 6,
            fullName: "Ruven Babamuratov",
            status: Statuses.active,
            email: "ruven.b@gmail.com"
        }
    ];

    return ( 
        <div className="container mt-5">
            <table className="table table-striped w-85">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
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