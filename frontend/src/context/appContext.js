import {createContext, useContext, useEffect, useState} from 'react';

export const AppContext = createContext({});

export const useFlash = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hide = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(hide);
    }, [show]);

    const showNotification = (type, message) => {
        setShow(true);
        setType(type);
        setMessage(message);
    };

    const value = {
        show,
        type,
        message,
        showNotification,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
};
