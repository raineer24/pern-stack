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
 }
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
}

export default useSignup