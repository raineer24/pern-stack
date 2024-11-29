import { Dispatch, ReactNode, createContext, SetStateAction, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

type AuthUserType = {
    id: string;
    fullName: string;
    email: string;
    profilePic: string;
    gender: string;
};

const AuthContext = createContext< {
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isloading: boolean;
}>({
    authUser: null,
    setAuthUser: () => {},
    isloading: true,
})

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isloading, setIsLoading] = useState(true);

    //logic will go here
    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if(!res.ok) {
                    throw new Error(data.error)
                }
            } catch(error: any) {
                console.error(error);
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAuthUser();
    }, []);

    return (
        <AuthContext.Provider
           value={{
            authUser,
            isloading,
            setAuthUser,
           }}
           >
            {children}
           </AuthContext.Provider>
    )
}