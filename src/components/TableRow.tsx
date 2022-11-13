interface Props {
    id: number,
    fullName: string,
    status: string,
    email: string
}

function TableRow({
    id,
    fullName,
    status,
    email}: Props) {
    return (  
        <tr>
            <th scope="row">{id}</th>
            <td>{fullName}</td>
            <td>
                <span className="badge text-bg-success">{status}</span>
            </td>
            <td>{email}</td>
        </tr>
    );
}

export default TableRow;