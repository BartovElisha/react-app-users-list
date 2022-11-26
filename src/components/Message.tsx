// Enum way 1
// enum IType {
//     warning = 'warning',
//     success = 'success'
// }

import { useEffect, useState } from "react";
import { User } from "../models/Models";

interface Props {
    // Way 2
    type: 'warning' | 'success' | 'info' | 'danger';
    children?: React.ReactNode;
    user?: User;
    showButton: boolean;    
}

function Message({
    type,
    children,
    user,
    showButton}: Props) {

    // show state    
    const [show, setShow] = useState(true);

    // Effect Hook
    // useEffect(() => {}); // on first render and evrytime on re-render
    // useEffect(() => {},[]); // on first render (onload component)
    // useEffect(() => {},[prop]); // depend on props value for example
    useEffect(() => {
        setShow(user ? true : false);    
    },[user]);    

    function getCssByType():string {
        switch (type) {
            case 'warning':
                return 'alert-warning';
            case 'success':
                return 'alert-success';
            case 'info':
                return 'alert-info';
            case 'danger':
                return 'alert-danger';
            default: 
                return 'alert-secondary';       
        }
    }

    function handleShow():string {
        if(!showButton) return 'd-block';
        return show ? 'd-block' : 'd-none';
    }

    return (  
        <div
            className={`alert ${getCssByType()} my-2 ${handleShow()} alert-dismissible`}
            role="alert"
        >
            {children}     
            {
                showButton && 
                <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close">
                </button>
            }       
        </div>
    );
}

export default Message;