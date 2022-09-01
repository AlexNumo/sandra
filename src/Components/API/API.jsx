const axios = require('axios');

const API = ({
        name,
        surname,
        tel,
        email,
        age,
        kind,
        sizeLag}) => {
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
    return (
        <div>
            <h2>Відправлено</h2>
        </div>
    )
}

export default API;