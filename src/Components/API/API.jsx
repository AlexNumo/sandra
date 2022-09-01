import { useState, useEffect } from 'react';
const axios = require('axios');

// mongodb+srv://sandra:sandra01111996@contacts.dmwvegx.mongodb.net/contact-pro

const API = ({
        name,
        surname,
        tel,
        email,
        age,
        kind,
        sizeLag}) => {
    //     "name " + name,
    //     "surname " + surname,
    //     "tel " + tel,
    //     "email " + email,
    //     "age " + age,
    //     "kind " + kind,
    //     "sizeLag " + sizeLag
    // const [data, setData] = useState(null);
    // const [apiDATA, setApiDATA] = useState([]);

        // fetch('api/contacts')
        //     .then(response => response.json())
        //     .then(response => setData(response));
    // var myJSON = JSON.parse(data); 
    // console.log(data[0]);
    axios.post('https://whispering-eyrie-00516.herokuapp.com/api/contacts', {
        name: name,
        surname: surname,
        tel: tel,
        email: email,
        age: age,
        kind: kind,
        sizeLag: sizeLag})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    // console.log(data);
    return (
        <div>
            <h2>Відправлено</h2>
        </div>
    )
}

export default API;