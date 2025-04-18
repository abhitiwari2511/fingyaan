import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLoggedIn, setisLoggedIn] = useState<Boolean | null>(null);

    useEffect(() => {
        const endpoint = `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/me`;
        axios.post(endpoint, {}, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((_res) => setisLoggedIn(true))
        .catch((error) => {
            console.error("Error fetching user data:", error);
            setisLoggedIn(false);
        })
    },[])

    if (isLoggedIn === null) return <h2 className="text-white items-center flex h-screen justify-center">Loading...</h2>; // Jab tak verify ho raha hai

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;