interface Props {
    id: number,
    fullName: string,
    status: string,
    email: string,
    statusColor: string
}

function TableRow({
    id,
    fullName,
    status,
    email,
    statusColor}: Props) {

    function handleClick(status: string) {
        alert(`User status is ${status}`);
    }
        
    return (  
        <tr>
            <th scope="row">{id}</th>
            <td>{fullName}</td>
            <td>
                <span onClick={() => handleClick(status)} className={statusColor}>{status}</span>
            </td>
            <td>{email}</td>
        </tr>
    );
}

export default TableRow;