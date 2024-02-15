import React from 'react';

const registerUser = async (username, password) => {
    try {
        // send a POST request to the registration endpoint on the server
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST', //use the POST method to send data to the server
            headers: {
                'Content-Type': 'application/json', // specify that the request contains JSON data
            },
            body: JSON.stringify({ username, password }), // convert user data to JSON format and include it in the request body
        });
        
        // parse the response from the server as JSON
        const data = await response.json();

        // log the message received from the server 
        console.log(data.message);
    }
    catch (error) {
        console.error('Error during registration:', error);
    }
}

function RegistrationScreen(props) {
    return (
        <div>
            
        </div>
    );
}

export default RegistrationScreen;