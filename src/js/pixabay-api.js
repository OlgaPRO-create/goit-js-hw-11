export const fetchImg = requestValue => {
    const searchParams =new URLSearchParams({
        key: '52351567-9bed95c87e6696adfbadfce62',
        q: requestValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
});
};