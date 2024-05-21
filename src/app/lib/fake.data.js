const users = [
    {
        "id": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
        "name": "Maria Com Com",
        "email": "mcomcom@hitmail.com",
        "image_url": "/users/maria-com-com.jpg",
    },
    {
        "id": "d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a",
        "name": "José da Silva",
        "email": "josedasilva@gmail.com",
        "image_url": "/users/joao-da-silva.jpg",
    }
];

const items = [
    {
        "id": "e0cdfaa6-ceee-4dd9-bfe6-cbcfeceffa8a",
        "title": "Blue Pants",
        "description": "Recently bought blue pants,they're pretty comfy",
        "author": "F. Scott Fitzgerald",
        "cover": "/items/blue-pants.jpg",
        "genre": "Novel",
        "pages": 256,
        "isRented": false,
        "stock": 34,
        "rentPrice": 24,
        "sellPrice": 230,
        "sold": 12,
        "ISBN": "1-86092-049-7"
    },
    {
        "id": "e0cdfaa6-deee-4dd9-bfe6-cbcfeceffa8a",
        "title": "Brown flat cap",
        "description": "Light weight hat, needs a new home :)",
        "author": "Arnold Bennett",
        "cover": "/items/brown-hat.jpg",
        "genre": "Crime",
        "pages": 198,
        "isRented": true,
        "stock": 7,
        "rentPrice": 15,
        "sellPrice": 120,
        "sold": 10,
        "ISBN": "1-86092-050-3",
        "renterIds": ["d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa"]
    },
    {
        "id": "e0cdfaa6-aeee-4dd8-b2e6-cbcfeceffa8a",
        "title": "Brown pants",
        "description": "Cpmfy and loose pants, perfect for any occasion",
        "author": "Lewis Carroll",
        "cover": "/items/brown-pants.jpg",
        "genre": "Children",
        "pages": 128,
        "isRented": false,
        "stock": 12,
        "rentPrice": 10,
        "sellPrice": 100,
        "sold": 15,
        "ISBN": "1-86092-051-X"
    },
    {
        "id": "e0cdfaa6-aeee-4dd9-bfe6-cbcfeceffa8a",
        "title": "bucket hat",
        "description": "pretty cool hat, it has a side pocket to store a lighter",
        "author": "Jane Austen",
        "cover": "/items/bucket-hat.jpg",
        "genre": "Classic",
        "pages": 280,
        "isRented": false,
        "stock": 20,
        "rentPrice": 15,
        "sellPrice": 120,
        "sold": 10,
        "ISBN": "1-86092-052-8"
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a",
        "title": "Button-up shirt",
        "description": "comfy slik cut shirt",
        "author": "Leo Tolstoy",
        "cover": "/items/buttonup-shirt.jpg",
        "genre": "Historical Fiction",
        "pages": 928,
        "isRented": false,
        "stock": 15,
        "rentPrice": 20,
        "sellPrice": 250,
        "sold": 10,
        "ISBN": "1-86092-053-6"
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8b",
        "title": "Long Skirt",
        "description": "Comfy white Skirt perfect for a sunny day",
        "author": "AM Best",
        "cover": "/items/long-skirt.jpg",
        "genre": "Biography",
        "pages": 700,
        "isRented": true,
        "stock": 10,
        "rentPrice": 15,
        "sellPrice": 120,
        "sold": 10,
        "ISBN": "1-86092-054-4",
        "renterIds": ["d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa", "3958dc9e-712f-4377-85e9-fec4b6a6442a"]
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8c",
        "title": "red and floral pants ",
        "description": "nice sweatpants for a casual day",
        "author": "Paulo Coelho",
        "cover": "/items/orange-pants.jpg",
        "genre": "Fiction",
        "pages": 280,
        "isRented": false,
        "stock": 0,
        "rentPrice": 15,
        "sellPrice": 120,
        "sold": 1,
        "ISBN": "1-86092-055-2"
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8d",
        "title": "Beige shirt",
        "description": "breathable shirt, nice fit",
        "author": "Herman Melville",
        "cover": "/items/weird-shirt_2.jpg",
        "genre": "Novels",
        "pages": 320,
        "isRented": false,
        "stock": 10,
        "rentPrice": 15,
        "sellPrice": 120,
        "sold": 1,
        "ISBN": "1-86092-056-0"
    }
];

const getAllitems = () => {
    return items;
}

const getItemById = id => {
    return items.find((item) => item.id === id);
}

module.exports = {
    getAllitems,
    getItemById
} 