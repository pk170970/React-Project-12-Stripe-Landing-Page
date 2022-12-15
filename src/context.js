
import React, { useState, useContext, useEffect } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [modal, setModal] = useState(false);
    const [location, setLocation] = useState({});
    const [text, setText] = useState("");
    const [page, setPage] = useState({ label: '', links: [] });

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }
    const handleModal = (input, coordinates) => {
        const page = sublinks.find(item => item.page === input);
        setPage(page);
        setLocation(coordinates);
        setText(input);
        // console.log("I hovered");
    }

    const closeModal = () => {
        setModal(false);
    }
    const openModal = () => {
        setModal(true);
    }


    return (

        <AppContext.Provider value={{ modal, sidebar, handleSidebar, handleModal, location, text, page, closeModal, openModal }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
