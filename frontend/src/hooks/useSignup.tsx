import { useState} from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

type SignupInputs = {
	fullName: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
};


const useSignup = () => {
 const [loading, setLoading ] = useState(false);
 const { setAuthUser } = useAuthContext();

 const signup = async (inputs: SignupInputs) => {
    const success = handleInputErrors(inputs);
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputs)
        });

        const data = await res.json();
        if(data.error) {
            throw new Error(data.error);
            // localStorage
            // context
        }

        if(!res.ok) throw Error(data.error);
        setAuthUser(data);
    } catch (error: any) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
 };

 return { loading, signup};

}

function handleInputErrors(inputs: SignupInputs) {
    if(!inputs) {
        toast.error("Please fill in all fields");
        return false;
    }

    if(inputs.password !== inputs.confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }
    
    if(inputs.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}

export default useSignup