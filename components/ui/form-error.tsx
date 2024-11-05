import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps{
    message?: string;
}

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return(
        <div className="form-error">
            <FaExclamationTriangle className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}