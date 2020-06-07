import { StyleSheet } from 'react-native'
// export const baseURL = 'http://localhost:3000';
export const baseURL = 'https://enigmatic-reaches-55405.herokuapp.com';

export const fetchFunction = (route, method, data) => {
    const params = (method !== "GET") && { body: JSON.stringify(data) }
    return fetch(`${baseURL}/${route}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        ...params
    })
        .then(response => {
            if (!response.ok) {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response.json(); //we only get here if there is no error
        })
};
