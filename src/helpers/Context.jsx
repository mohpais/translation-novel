import React, { createContext, useState, useContext, useEffect } from 'react';
import ModalChapter from 'admpanel/includes/ModalChapter';
import ModalNovel from 'admpanel/includes/ModalNovel';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('fz')
    const [tokenify, setToken] = useState(null)
    const [loading, setLoading] = useState(true)
    const [toggleActive, setToggleActive] = useState(true);
    const [modal, setModal] = useState(null)

    // useEffect(() => {
    //     async function loadUserFromCookies() {
    //         const token = Cookies.get('token')
    //         if (token) {
    //             if (!tokenify) setToken(token)
    //             console.log("Got a token in the cookies, let's see if it is valid")
    //             api.defaults.headers.Authorization = `Bearer ${token}`
    //             const { data } = await api.get('auth/get')
    //                 .then(res => {
    //                     return res.data
    //                 })
    //                 .catch(err => {
    //                     Cookies.remove('token')
    //                     return false
    //                 })
    //             if (data) {
    //                 console.log("auth is valid with", data.first_name)
    //                 setUser(data);
    //             }
                
    //         }
    //         setLoading(false)
    //     }
    //     loadUserFromCookies()
    // }, [])

    const handleModal = (name) => {
        setModal(name)
    }

    const showModal = (name) => {
        switch (name) {
            case 'modal-chapter':
                return (
                    <ModalChapter status="true" />
                )
            case 'modal-novel':
                return (
                    <ModalNovel status="true" />
                )
            default:
                break;
        }
    }

    const login = async (username, password) => {
        let data = {
            username,
            password
        }
        return data
    }

    const handleToggle = (status) => {
        setToggleActive(!status)
    }

    const logout = () => {
        return 'Good bye! :)'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, handleToggle, toggleActive, handleModal }}>
            {modal && showModal(modal)}
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export default useAuth;

