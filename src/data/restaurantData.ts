import { IMAGES } from '../assets/images';

export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'pizza' | 'specials' | 'chinese' | 'pasta' | 'coffee' | 'desserts' | 'iftar';
  price: string;
  description: string;
  sizes?: { name: string; price: string }[];
  tag?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'food' | 'coffee' | 'menu' | 'atmosphere';
  timeOfDay: 'day' | 'night' | 'all';
  src: string;
  fallbackSrc: string;
  description: string;
  aspect?: 'wide' | 'tall' | 'square';
}

export const RESTAURANT_INFO = {
  name: 'Coffee Castle Taxila',
  tagline: 'Coffee, Food & Moments Worth Sharing',
  subheading: 'Café & Contemporary Dining in Taxila',
  address: 'Allama Iqbal Avenue, Taxila, Rawalpindi, Punjab, Pakistan',
  locationBrief: 'Taxila • Allama Iqbal Avenue',
  plusCode: 'PRMC+MX5, Allama Iqbal Ave, Taxila',
  googleMapsUrl: 'https://maps.google.com/?q=PRMC%2BMX5,+Allama+Iqbal+Ave,+Taxila',
  phone: '051-4908443',
  phoneTel: 'tel:0514908443',
  googleRating: 4.2,
  googleReviewsCount: 534,
  priceRange: 'PKR 1,000–2,000 approx.',
  closingTime: 'Open until approx. 12:00 AM',
  outdoorSeating: true,
  aboutCopy:
    'Located on Allama Iqbal Avenue in Taxila, Coffee Castle combines a relaxed café atmosphere with a broad food menu. Designed as a welcoming gathering space for families, friends, and casual dining, it brings together freshly brewed specialty coffee, artisan pizzas, gourmet burgers, sizzling continental platters, and quiet moments from daylight to midnight.',
};

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'CASTLE Burger',
    category: 'burgers',
    price: 'Rs. 580',
    description: 'Signature house specialty burger with double seasoned patty, melted cheese, and Castle secret sauce, served with golden french fries.',
    tag: 'Signature',
  },
  {
    id: 'b2',
    name: 'Zinger Burger with Fries',
    category: 'burgers',
    price: 'Rs. 500',
    description: 'Crispy deep-fried golden chicken fillet seasoned with savory spices, fresh crisp lettuce, and signature mayonnaise on a toasted bun.',
  },
  {
    id: 'b3',
    name: 'BBQ Burger with Fries',
    category: 'burgers',
    price: 'Rs. 490',
    description: 'Tender chicken patty glazed with smoky barbecue sauce, crisp greens, and caramelized notes, served with hot crispy fries.',
  },
  {
    id: 'b4',
    name: 'Charcoal Grilled Burger with Fries',
    category: 'burgers',
    price: 'Rs. 450',
    description: 'Flame-grilled marinated chicken patty with authentic charcoal smokiness, fresh veggies, and house herb dressing.',
  },
  {
    id: 'b5',
    name: 'Classic Burger with Fries',
    category: 'burgers',
    price: 'Rs. 450',
    description: 'Traditional juicy burger patty with crisp lettuce, sliced tomato, cheese, and seasoned golden french fries.',
  },

  // Pizzas
  {
    id: 'p1',
    name: 'Castle Pizza (Signature)',
    category: 'pizza',
    price: 'From Rs. 550',
    description: 'Our premier signature pie loaded with Chicken Tikka & Fajita, rich tomato sauce, black olives, and sautéed mushrooms on artisan crust.',
    sizes: [
      { name: 'Small', price: 'Rs. 550' },
      { name: 'Medium', price: 'Rs. 1,050' },
      { name: 'Large', price: 'Rs. 1,500' },
    ],
    tag: 'Chef Choice',
  },
  {
    id: 'p2',
    name: 'Chicken Tikka Pizza',
    category: 'pizza',
    price: 'From Rs. 450',
    description: 'Traditional spiced Pakistani chicken tikka chunks, melted mozzarella cheese, onions, and rich marinara sauce.',
    sizes: [
      { name: 'Small', price: 'Rs. 450' },
      { name: 'Medium', price: 'Rs. 890' },
      { name: 'Large', price: 'Rs. 1,250' },
    ],
  },
  {
    id: 'p3',
    name: 'Chicken Fajita Pizza',
    category: 'pizza',
    price: 'From Rs. 450',
    description: 'Marinated Mexican-style chicken fajita strips with crisp green & red bell peppers, sliced onions, and gooey mozzarella.',
    sizes: [
      { name: 'Small', price: 'Rs. 450' },
      { name: 'Medium', price: 'Rs. 890' },
      { name: 'Large', price: 'Rs. 1,250' },
    ],
  },
  {
    id: 'p4',
    name: 'Chicken BBQ Pizza',
    category: 'pizza',
    price: 'From Rs. 450',
    description: 'Barbecue glazed chicken chunks, sweet smoky BBQ reduction, sliced black olives, and premium mozzarella blend.',
    sizes: [
      { name: 'Small', price: 'Rs. 450' },
      { name: 'Medium', price: 'Rs. 890' },
      { name: 'Large', price: 'Rs. 1,250' },
    ],
  },

  // Special Continental Dishes & Steaks
  {
    id: 's1',
    name: 'Grilled Chicken in Mushroom Sauce',
    category: 'specials',
    price: 'Rs. 690',
    description: 'Succulent grilled chicken fillet smothered in a rich, velvety mushroom cream sauce with black olives, served with fries and sautéed vegetables.',
    tag: 'Popular',
  },
  {
    id: 's2',
    name: 'Chicken Supreme',
    category: 'specials',
    price: 'Rs. 690',
    description: 'Tender chicken breast prepared in seasoned continental cream sauce, accompanied by sautéed garden vegetables and seasoned fried rice.',
  },
  {
    id: 's3',
    name: 'Sizzler Platter',
    category: 'specials',
    price: 'Chef Special',
    description: 'Cast-iron sizzling platter with marinated chicken strips tossed in fiery glaze, sautéed cabbage, bell peppers, carrots, and potato accompaniments.',
  },

  // Chinese Specialties
  {
    id: 'c1',
    name: 'Chicken Chili Dry',
    category: 'chinese',
    price: 'Rs. 540',
    description: 'Wok-tossed boneless chicken strips with green chilies, onions, and spicy oriental seasonings. Served with Garlic Fried / Jasmine Rice.',
  },
  {
    id: 'c2',
    name: 'Chicken Manchurian',
    category: 'chinese',
    price: 'Rs. 540',
    description: 'Classic tangy tomato and garlic red sauce glazed chicken chunks with bell peppers. Served with Garlic Fried / Jasmine Rice.',
  },
  {
    id: 'c3',
    name: 'Sweet & Sour Chicken',
    category: 'chinese',
    price: 'Rs. 540',
    description: 'Crispy tender chicken pieces coated in rich sweet and sour sauce with pineapple and bell peppers. Served with Jasmine Rice.',
  },

  // Pasta
  {
    id: 'pa1',
    name: 'Creamy Penne Alfredo',
    category: 'pasta',
    price: 'Continental',
    description: 'Al dente penne pasta coated in rich, velvety garlic parmesan cream sauce, topped with grilled chicken fillet and herbs.',
  },

  // Coffee & Beverages
  {
    id: 'cf1',
    name: 'Artisan Cappuccino',
    category: 'coffee',
    price: 'Café Specialty',
    description: 'Rich dark espresso shot crowned with silky steamed milk foam and hand-poured multi-tiered leaf latte art.',
  },
  {
    id: 'cf2',
    name: 'Caffe Latte & Mocha',
    category: 'coffee',
    price: 'Café Specialty',
    description: 'Smooth espresso blended with steamed milk and chocolate drizzle or vanilla bean infusion.',
  },
  {
    id: 'cf3',
    name: 'Specialty Fruit & Berry Shakes',
    category: 'coffee',
    price: 'Beverage Bar',
    description: 'Thick, creamy chilled milkshakes including wild berry, chocolate fudge, and fresh café blends served in classic fountain glassware.',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Decadent Chocolate Ganache Cake',
    category: 'desserts',
    price: 'Bakery Selection',
    description: 'Rich multi-layer chocolate fudge sponge finished with mirror dark chocolate glaze, chocolate bars, and piped rosettes.',
  },

  // Ramadan / Seasonal
  {
    id: 'r1',
    name: 'Ramadan Iftar Platter',
    category: 'iftar',
    price: 'Rs. 999',
    description: 'Special seasonal platter: Dates, Jam-e-Shirin, Chicken Strips, Alfredo Pasta, Fruit Chaat, Dahi Bhallay / Chana Chaat, Finger Fish, Chicken Roll, Pakoras, Cold Sandwich, Kheer / Trifle, Mini Beef Samosa, Chutneys & Mineral Water.',
    tag: 'Seasonal Special',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Coffee Castle Architectural Facade at Dusk',
    category: 'exterior',
    timeOfDay: 'night',
    src: IMAGES.hero,
    fallbackSrc: IMAGES.publicHero,
    description: 'Modern single-storey pavilion structure with vertical pillars and glowing neon signage under the evening twilight sky.',
    aspect: 'wide',
  },
  {
    id: 'g2',
    title: 'Sunlit Outdoor Patio & Garden Lawn',
    category: 'exterior',
    timeOfDay: 'day',
    src: IMAGES.patio,
    fallbackSrc: IMAGES.publicPatio,
    description: 'Sunny daytime view with red-and-white striped window awnings, comfortable black rattan armchairs, and manicured lawns.',
    aspect: 'wide',
  },
  {
    id: 'g3',
    title: 'Artisanal Cappuccino with Leaf Latte Art',
    category: 'coffee',
    timeOfDay: 'day',
    src: IMAGES.latte,
    fallbackSrc: IMAGES.publicLatte,
    description: 'Freshly pulled espresso with creamy velvety steamed milk foam poured in a delicate multi-layered rosette design.',
    aspect: 'square',
  },
  {
    id: 'g4',
    title: 'Freshly Baked Artisan Pizza on Wooden Paddle',
    category: 'food',
    timeOfDay: 'all',
    src: IMAGES.pizza,
    fallbackSrc: IMAGES.publicPizza,
    description: 'Stone-baked pizza crust topped with melted mozzarella cheese, seasoned chicken, black olives, bell peppers, and jalapeños.',
    aspect: 'square',
  },
  {
    id: 'g5',
    title: 'Crispy Chicken Steak with Creamy Mushroom Sauce',
    category: 'food',
    timeOfDay: 'all',
    src: IMAGES.steak,
    fallbackSrc: IMAGES.publicSteak,
    description: 'Golden crumbed chicken cutlet smothered in rich mushroom cream sauce with black olives, crispy fries, and sautéed vegetables.',
    aspect: 'square',
  },
];
