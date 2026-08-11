
import axios from 'axios';

export async function getImagesByQuery(query, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const response = await axios.get(BASE_URL, {params: {
        key: '57059976-78b6aab6913e377eac19868e8',
        q: query,
        page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        lang: "en"
      },
    })
    return response.data;
    
}
   
