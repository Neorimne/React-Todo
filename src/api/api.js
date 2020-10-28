import axios from "axios";

export const getPostsData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        return await response.data;
    }
    catch(err) {
        console.log(err)
    };
};

export const getUsersData = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        return await response.data;
    }
    catch(err) {
        console.log(err);
    }
};


