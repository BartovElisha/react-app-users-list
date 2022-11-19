import { Statuses } from "../types/Types";

interface Props {
    id: number,
    fullName: string,
    status: Statuses,
    email: string,
}

function TableRow({
    id,
    fullName,
    status,
    email}: Props) {

    function getStatusColor(status: string) {
        switch (status) {
            case Statuses.new: return "badge text-bg-primary";
            case Statuses.active: return "badge text-bg-success";
            case Statuses.expired: return "badge text-bg-warning";
            case Statuses.banded: return "badge text-bg-danger";
            default : return "badge text-bg-danger";
        }
    }        

    function handleClick(status: Statuses) {
        alert(`User status is ${status}`);
    }
        
    return (  
        <tr>
            <th scope="row">{id}</th>
            <td>{fullName}</td>
            <td>
                <button className="btn">
                    <span onClick={() => handleClick(status)} className={getStatusColor(status)}>
                        {status}
                    </span>
                </button>
            </td>
            <td>{email}</td>
            <td>
                <button className="btn">
                    <i className="bi-trash me-2"></i>
                </button>
            </td>
        </tr>
    );
}

export default TableRow;