import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLoggedIn, setisLoggedIn] = useState<Boolean | null>(null);

    useEffect(() => {
        const endpoint = `${import.meta.env.VITE_BACKEND_URL}/users/me`;
        axios.post(endpoint, {}, {
            withCredentials: true
        }).then((_res) => setisLoggedIn(true))
        .catch(() => setisLoggedIn(false))
    },[])

    if (isLoggedIn === null) return <h2 className="text-white items-center flex h-full justify-center">Loading...</h2>; // Jab tak verify ho raha hai

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;