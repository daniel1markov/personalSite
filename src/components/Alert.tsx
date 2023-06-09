import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className= "alert alert-primary alert-dismissible ">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dissmiss="alert" aria-label="Close"/>
        </div>
    )
}

export default Alert;