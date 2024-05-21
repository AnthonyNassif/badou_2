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
        "cover": "/items/blue-pants.jpg", 
        "sellPrice": 23,
        "type":"pants",
        "brand":"patagonia",
        "size":"Large",
        "stock":1,
        "condition":"good",
        "isRented": false,

       
    },
    {
        "id": "e0cdfaa6-deee-4dd9-bfe6-cbcfeceffa8a",
        "title": "Brown flat cap",
        "description": "Light weight hat, needs a new home :)",
        "cover": "/items/brown-hat.jpg",
        "sellPrice": 120,
        "rentPrice": 50,
        "isRented": true,
        "type":"hat",
        "brand":"Nike",
        "size":"Large",
        "stock":1,
        "condition":"good",
        "renterIds": ["d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa"]
    },
    {
        "id": "e0cdfaa6-aeee-4dd8-b2e6-cbcfeceffa8a",
        "title": "Brown pants",
        "description": "Comfy and loose pants, perfect for any occasion",
        "cover": "/items/brown-pants.jpg",
        "sellPrice": 100,
        "type":"pants",
        "brand":"Dick's",
        "size":"Large",
        "condition":"Used",
        "stock":1,
        "isRented": false,


    },
    {
        "id": "e0cdfaa6-aeee-4dd9-bfe6-cbcfeceffa8a",
        "title": "bucket hat",
        "description": "pretty cool hat, it has a side pocket to store a lighter",
        "cover": "/items/bucket-hat.jpg",
        "sellPrice": 120,
        "type":"hat",
        "brand":"North Face",
        "size":"Medium",
        "condition":"good",
        "stock":1,
        "isRented": false,

    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a",
        "title": "Button-up shirt",
        "description": "comfy slik cut shirt",
        "cover": "/items/buttonup-shirt.jpg",
        "sellPrice": 250,
        "type":"shirt",
        "brand":"Hugo",
        "size":"Large",
        "condition":"good",
        "stock":1,
        "isRented": false,

        
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8b",
        "title": "Long Skirt",
        "description": "Comfy white Skirt perfect for a sunny day",
        "cover": "/items/long-skirt.jpg",
        "isRented": true,      
        "rentPrice": 15,
        "sellPrice": 120,
        "type":"skirt",
        "brand":"Zara",
        "size":"Medium",
        "condition":"good",       
        "stock":1,
        "renterIds": ["d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa", "3958dc9e-712f-4377-85e9-fec4b6a6442a"]
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8c",
        "title": "red and floral pants ",
        "description": "nice sweatpants for a casual day",    
        "cover": "/items/orange-pants.jpg",
        "sellPrice": 20,
        "type":"pants",
        "brand":"Pull n Bear",
        "size":"Large",
        "condition":"good",
        "stock":1,
        "isRented": false,

       
        
    },
    {
        "id": "e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8d",
        "title": "Beige shirt",
        "description": "breathable shirt, nice fit",
        "cover": "/items/weird-shirt_2.jpg",
        "sellPrice": 70,
        "type":"pants",
        "brand":"patagonia",
        "size":"Large",
        "condition":"good",
        "stock":1,
        "isRented": false,

       
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