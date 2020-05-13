import axios from "axios";



export const getPostsData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        return await response.data;
    }
    catch(err) {
        console.log(err)
    };
}

export const getUsersData = async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        return await response.data;
    }
    catch(err) {
        console.log(err);
    }
};

export const getUserImagesData = async () => {
    try {
        const response = await axios.get(
            'https://api.thecatapi.com/v1/images/search?limit=11'
        );
        const imgURLS = await response.data.map(element => element.url);
        return imgURLS;
    }
    catch(err) {
        console.log(err)
    }  
};
