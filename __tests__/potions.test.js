import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

test('GET /api/potions', async () => {
  const response = await request.get('/api/potions');
  const expected = [
    {
      name: 'Healing Potion',
      color: 'red',
      price: 2,
      url: 'https://www.pngitem.com/pimgs/m/87-879825_tww-red-potion-artwork-zelda-red-potion-hd.png'
    },
     
    {
      name: 'Invisibility Potion',
      color: 'clear',
      price: '10',
      url: 'https://db4sgowjqfwig.cloudfront.net/campaigns/169345/assets/955288/Potion_of_Invisibility.png?1553372527.jpg',
    },
    {
      name: 'Stoneskin Potion',
      color: 'gray',
      price: 10,
      url: 'https://cdn.dribbble.com/users/339076/screenshots/2791951/potionbottledribbble-01.jpg'
    },
    {
      name: 'Waterwalking Potion',
      color: 'blue',
      price: 7,
      url: 'https://images.saymedia-content.com/.image/t_share/MTc0NDU3ODkwMjM5ODgyNjAw/best-zelda-potions.png'
    },
    {
      name: 'Truth Potion',
      color: 'purple',
      price: 12,
      url: 'https://elements-cover-images-0.imgix.net/d60b26dc-a63a-49a1-bd60-ffe8e144627b?auto=compress%2Cformat&fit=max&w=632&s=145634af27af0fe65bf812c9f2f0e41e'
    }
  ];

 

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expected);
});

test('GET /api/potions/1', async () => {
  const response = await request.get('/api/potions/1');
  const expected = {
        
    name: 'Healing Potion',
    color: 'red',
    price: 2,
    url: 'https://www.pngitem.com/pimgs/m/87-879825_tww-red-potion-artwork-zelda-red-potion-hd.png'
          
  };
 
  expect(response.status).toBe(200);
  expect(response.body).toEqual(expected);
});