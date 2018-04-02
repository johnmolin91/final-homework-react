import axios from 'axios'

export const getArticles = () => {
    return axios.get('/api/articles', (data) => {
        return data
    });
}