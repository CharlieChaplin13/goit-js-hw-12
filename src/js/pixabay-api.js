
import axios from 'axios';

export function getImagesByQuery(query) {
    const BASE_URL = 'https://pixabay.com/api/';

    return axios.get(BASE_URL, {params: {
        key: '57059976-78b6aab6913e377eac19868e8',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        lang: "en"
      },
    })
      .then(response => {
        return response.data;
    })
}
   
