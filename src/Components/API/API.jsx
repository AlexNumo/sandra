const axios = require('axios');

const SignUpAPI = ({
        name,
        email,
        password,
    }) => {
    axios.post('https://sandra-back-end.herokuapp.com', {
        name: name,
        email: email,
        password: password,
    })
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

const SignInAPI = ({
        email,
        password,
    }) => {
    axios.post('https://sandra-back-end.herokuapp.com/users/signin', {
        email: email,
        password: password,
    })
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

export {
    SignUpAPI,
    SignInAPI
};