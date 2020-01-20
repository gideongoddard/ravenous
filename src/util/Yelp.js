const apiKey = 'nCjXAsAoLwYKSmC35HrKaq0Lclr0NS3TMXf60dz38PX12bVEyValREDGQzwsO43MaudQQFmEb3MX88dnzy-KH9vARdzUCOPIy2jN9WJ7qfpRXnYtI63Nr_a8U8glXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`}}).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }
            });
    }
}

export default Yelp;