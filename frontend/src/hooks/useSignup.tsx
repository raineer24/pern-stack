import { useState} from 'react';
import toast from 'react-hot-toast';

type SignupInputs = {
	fullName: string;
	username: string;
	password: string;
	confirmPassword: string;
	gender: string;
};


const useSignup = () => {
 const [loading, setLoading ] = useState(false);

 const signup = async (inputs: SignupInputs) => {
    const success = handleInputErrors(inputs);
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputs)
        });

        const data = await res.json();
        console.log(data);
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