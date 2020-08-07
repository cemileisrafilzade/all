import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [data, setData] = useState({
        id: null,
        username: null,
        auth: false
    });

    const setAuthSuccess = ({ id, username }) => {
        updateData({
            username,
            id,
            auth: true
        })
    };

    const logOut = () => {
        updateData({
            username: null,
            id: null,
            auth: false
        })
    }

    const updateData = (newValues) => {
        setData(data => {
            const newData = {
                ...data,
                ...newValues
            }
            updateLocalStorage(newData);
            return newData;
        });
    }

    const updateLocalStorage = (data) => {
        localStorage.setItem('auth', JSON.stringify(data));
    }

    useEffect(() => {
        const localAuthJSON = localStorage.getItem('auth');
        if (localAuthJSON) {
            const localAuth = JSON.parse(localAuthJSON);
            if (localAuth.auth) {
                updateData(localAuth);
            }
        }
    }, []);


    return (
        <AuthContext.Provider value={{ ...data, setAuthSuccess, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}