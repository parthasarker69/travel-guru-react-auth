import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const [selectedCountry, setSelectedCountry] = useState({
        id: 1,
        name: "Bangladesh",
        img: "https://images.unsplash.com/photo-1605624499175-8f31c5ee356f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        details: "Bangladesh (/ˌbæŋɡləˈdɛʃ, ˌbɑːŋ-/;[16] Bengali: বাংলাদেশ, pronounced [ˈbaŋlaˌdeʃ] (listen)), officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most-populous country in the world, with a population of around 169 million people in an area of 148,460 square kilometres (57,320 sq mi).[10] Bangladesh is among the most densely populated countries in the world, and shares land borders with India to the west, north, and east, and Myanmar to the southeast; to the south it has a coastline along the Bay of Bengal. It is narrowly separated from Bhutan and Nepal by the Siliguri Corridor; and from China by the Indian state of Sikkim in the north. Dhaka, the capital and largest city, is the nation's political, financial and cultural centre. Chittagong, the second-largest city, is the busiest port on the Bay of Bengal. The official language is Bengali, one of the easternmost branches of the Indo-European language family."
    });

    const authValue = { selectedCountry, setSelectedCountry, countries }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;