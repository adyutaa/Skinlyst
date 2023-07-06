import bcrypt from 'bcryptjs';
const data = {
  users: [
        {
        _id: '1',
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
        name: 'Centella Green Level Unscented Sun SPF50+ PA++++',
        slug: 'centella-grell',
        category: 'Sunscreen',
        image: 'images/wardah.png',
        price: 23.00,
        countInStock: 10,
        brand: 'Klairs',
        rating: 4.5,
        numReviews: 10,
        description: 'A water-based, unscented sunscreen that offers SPF50+ PA++++ protection with centella asiatica and aloe vera.'
    },
    {
        name: 'Skintific Beauty',
        slug: 'centella-g',
        category: 'Sunscreen',
        image: 'images/wardah.png',
        price: 23.00,
        countInStock: 10,
        brand: 'Klairs',
        rating: 4.5,
        numReviews: 10,
        description: 'A water-based, unscented sunscreen'
    },
    {
        name: 'Centella Green Level',
        slug: 'centella-green',
        category: 'Sunscreen',
        image: 'images/wardah.png',
        price: 23.00,
        countInStock: 10,
        brand: 'Klairs',
        rating: 4.5,
        numReviews: 10,
        description: 'A water-based, unscented sunscreen' 
    }
],
};
export default data;