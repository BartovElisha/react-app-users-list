// Enum way 1
// enum IType {
//     warning = 'warning',
//     success = 'success'
// }

import { useState } from "react";

interface Props {
    // Way 2
    type: 'warning' | 'success' | 'info';
    showMode?: boolean; // ? - not mandatory props
    children?: React.ReactNode;
}

function Message({
    type,
    showMode = true,
    children}: Props) {

    const [show, setShow] = useState(showMode);

    function getCssByType():string {
        switch (type) {
            case 'warning':
                return 'alert-warning';
            case 'success':
                return 'alert-success';
            case 'info':
                return 'alert-info';
            default: 
                return 'alert-secondary';       
        }
    }

    function handleShow():string {
        return show ? 'd-block' : 'd-none';
    }

    return (  
        <div
            className={`alert ${getCssByType()} my-2 ${handleShow()} alert-dismissible`}
            role="alert"
        >
            {children}            
            <button
                onClick={() => setShow(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
}

export default Message;