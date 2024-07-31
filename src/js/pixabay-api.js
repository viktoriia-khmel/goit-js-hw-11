export function searchImages(query) {
  const API_KEY = '45157034-b6e4e263cfc131778ce7a37cc';
  const URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        alert('Something went wrong!');
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
