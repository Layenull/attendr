import React from 'react'
import { createContext, useState, useEffect } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        matriculation_no: '',
        password: '',
        // Add other fields as needed
    });

    // Load user data from local storage
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    // Save user data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};



export default userContext