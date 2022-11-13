interface Props {
    id: number,
    fullName: string,
    status: string,
    email: string,
}

function TableRow({
    id,
    fullName,
    status,
    email}: Props) {

    function getStatusColor(status: string) {
        switch (status) {
            case "Active": return "badge text-bg-success";
            case "Expired": return "badge text-bg-warning";
            case "Banded": return "badge text-bg-danger";
            default : return "badge text-bg-danger";
        }
    }        

    function handleClick(status: string) {
        alert(`User status is ${status}`);
    }
        
    return (  
        <tr>
            <th scope="row">{id}</th>
            <td>{fullName}</td>
            <td>
                <span onClick={() => handleClick(status)} className={getStatusColor(status)}>
                    {status}
                </span>
            </td>
            <td>{email}</td>
        </tr>
    );
}

export default TableRow;