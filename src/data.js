const productsList = [
  {
    id: 1,
    name: "Adidas Samba Black",
    category: "shoes",
    price: 65,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-1.jpeg",
    description: "Classic black leather sneakers with iconic white 3-Stripes and retro streetwear comfort."
  },
  {
    id: 2,
    name: "Adidas Forum Grey",
    category: "shoes",
    price: 85,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-2.jpeg",
    description: "Classic retro Adidas sneakers featuring a premium suede upper and durable rubber outsole."
  },
  {
    id: 3,
    name: "Nike Dunk Navy",
    category: "shoes",
    price: 75,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-3.jpeg",
    description: "Classic retro sneakers highlighting deep navy overlays on a clean white leather base."
  },
  {
    id: 4,
    name: "Nike Dunk Red",
    category: "shoes",
    price: 75,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-4.jpeg",
    description: "Classic low-top sneakers in a striking red and white leather design for an effortless street style."
  },
  {
    id: 5,
    name: "Nike Dunk Suede",
    category: "shoes",
    price: 80,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-5.jpeg",
    description: "Premium suede low-tops featuring dark grey and charcoal tones with iconic Swoosh detailing."
  },
  {
    id: 6,
    name: "Nike Dunk Grey",
    category: "shoes",
    price: 75,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-6.jpeg",
    description: "Minimalist low-top sneakers crafted with smooth leather in neutral grey and white tones."
  },
  {
    id: 7,
    name: "Adidas Adizero White",
    category: "shoes",
    price: 90,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-7.jpeg",
    description: "High-performance running shoes equipped with Lightstrike Pro cushioning and breathable mesh."
  },
  {
    id: 8,
    name: "Adidas Adizero Blue",
    category: "shoes",
    price: 95,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-8.jpeg",
    description: "Lightweight running sneakers with bold blue stripes and ultra-supportive foam sole for ultimate speed."
  },
  {
    id: 9,
    name: "Nike GT Cut Blue",
    category: "shoes",
    price: 110,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-9.jpeg",
    description: "Elite performance basketball shoes featuring a vibrant royal blue knit upper and superior court traction."
  },
  {
    id: 10,
    name: "Adidas Adizero Neon",
    category: "shoes",
    price: 90,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/id-10.jpeg",
    description: "Eye-catching running sneakers with a high-visibility neon mesh upper and dynamic athletic response."
  },
 {
    id: 11,
    name: "Classic Black Athletic Polo",
    category: "t-shirts",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-11.jpeg",
    description: "Sleek black polo shirt designed with breathable fabric for smart casual and athletic wear."
  },
  {
    id: 12,
    name: "Pro Fit White Polo T-Shirt",
    category: "t-shirts",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-12.jpeg",
    description: "Clean white polo shirt offering a crisp fit and maximum comfort during daily activities."
  },
  {
    id: 13,
    name: "Olive Green Sport Polo T-Shirt",
    category: "t-shirts",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-13.jpeg",
    description: "Stylish olive green polo t-shirt with modern slim cut and flexible stretch fabric."
  },
  {
    id: 14,
    name: "Cross Black Oversized T-Shirt",
    category: "t-shirts",
    price: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-14.jpeg",
    description: "Trendy black oversized t-shirt featuring subtle chest branding and relaxed drop-shoulder fit."
  },
  {
    id: 15,
    name: "Cross White Oversized T-Shirt",
    category: "t-shirts",
    price: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-15.jpeg",
    description: "Premium white oversized tee with minimal design for modern streetwear look."
  },
  {
    id: 16,
    name: "Cross Olive Oversized T-Shirt",
    category: "t-shirts",
    price: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-16.jpeg",
    description: "Urban olive green oversized t-shirt crafted from heavy cotton for maximum style and comfort."
  },
  {
    id: 17,
    name: "Performance Gym Crew T-Shirt (Black)",
    category: "t-shirts",
    price: 25,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-17.jpeg",
    description: "High-performance black gym shirt built with quick-dry moisture-wicking fabric."
  },
  {
    id: 18,
    name: "Performance Gym Crew T-Shirt (White)",
    category: "t-shirts",
    price: 25,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-18.jpeg",
    description: "Lightweight athletic white gym t-shirt designed for heavy workouts and training sessions."
  },
  {
    id: 19,
    name: "Cross Forest Green Oversized T-Shirt",
    category: "t-shirts",
    price: 30,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-19.jpeg",
    description: "Deep green oversized t-shirt combining relaxed streetwear style with premium soft cotton."
  },
  {
    id: 20,
    name: "Pro Performance Tank Top (Black)",
    category: "t-shirts",
    price: 22,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-20.jpeg",
    description: "Breathable black sleeveless gym tank top designed for maximum mobility and intense training."
  },
  {
    id: 21,
    name: "Pro Performance Tank Top (White)",
    category: "t-shirts",
    price: 22,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-21.jpeg",
    description: "Clean white lightweight athletic tank top crafted from moisture-wicking stretch fabric."
  },
  {
    id: 22,
    name: "Pro Performance Tank Top (Olive)",
    category: "t-shirts",
    price: 22,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-22.jpeg",
    description: "Modern olive green sleeveless workout shirt offering a flexible, comfortable gym fit."
  },
  {
    id: 23,
    name: "Pro Performance Tank Top (Grey)",
    category: "t-shirts",
    price: 22,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-23.jpeg",
    description: "Athletic light grey tank top ideal for daily training sessions and heavy gym workouts."
  },
  {
    id: 24,
    name: "Pro Performance Shorts (Black)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-24.jpeg",
    description: "Breathable black athletic training shorts designed for optimal movement and comfort."
  },
  {
    id: 25,
    name: "Pro Performance Shorts (White)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-25.jpeg",
    description: "Classic white double-layer gym shorts with a lightweight feel and durable fabric."
  },
  {
    id: 26,
    name: "Pro Performance Shorts (Olive)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-26.jpeg",
    description: "Modern olive green sports shorts with convenient side pockets and a flexible fit."
  },
  {
    id: 27,
    name: "Performance Workout Shorts (Dark Grey)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-27.jpeg",
    description: "Stylish dark grey gym shorts engineered for comfort during high-intensity workouts."
  },
  {
    id: 28,
    name: "Performance Workout Shorts (Navy Blue)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-28.jpeg",
    description: "Comfortable navy blue workout shorts with breathable technology for dry training."
  },
  {
    id: 29,
    name: "Performance Workout Shorts (Light Grey)",
    category: "shorts",
    price: 20,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-29.jpeg",
    description: "Athletic light grey shorts ideal for flexible movement in the gym and casual wear."
  },
  {
    id: 30,
    name: "Nike Pro Combat Training Shorts (Light Grey)",
    category: "shorts",
    price: 23, // السعر أعلى قليلاً كونه نايك
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-30.jpeg",
    description: "Premium light grey Nike Pro Combat performance training shorts with moisture-wicking technology."
  },
  {
    id: 31,
    name: "Track Pants (Dark Grey)",
    category: "pants",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-31.jpeg",
    description: "Comfortable dark grey athletic track pants designed for gym workouts and daily active wear."
  },
  {
    id: 32,
    name: "Track Pants (Navy)",
    category: "pants",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-32.jpeg",
    description: "Classic navy blue training pants featuring flexible stretch fabric and deep side pockets."
  },
  {
    id: 33,
    name: "Track Pants (Light Grey)",
    category: "pants",
    price: 35,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-33.jpeg",
    description: "Lightweight light grey workout pants crafted for breathable comfort during training."
  },
  {
    id: 34,
    name: "Parachute Pants (Black)",
    category: "pants",
    price: 27,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-34.jpeg",
    description: "Trendy black parachute pants with an oversized fit and adjustable ankle cuffs."
  },
  {
    id: 35,
    name: "Parachute Pants (Grey)",
    category: "pants",
    price: 27,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-35.jpeg",
    description: "Modern grey parachute cargo pants offering a relaxed streetwear style and light feel."
  },
  {
    id: 36,
    name: "Adidas Sweatpants (Light Grey)",
    category: "pants",
    price: 37,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-36.jpeg",
    description: "Premium light grey Adidas sports sweatpants featuring soft fleece interior and iconic branding."
  },
  {
    id: 37,
    name: "Adidas Sweatpants (Black)",
    category: "pants",
    price: 37,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-37.jpeg",
    description: "Classic black Adidas athletic sweatpants engineered for maximum warmth and comfort."
  },
  {
    id: 38,
    name: "Adidas Sweatpants (White)",
    category: "pants",
    price: 37,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-38.jpeg",
    description: "Clean white Adidas casual sweatpants designed with elastic waistband and tapered leg."
  },
  {
    id: 39,
    name: "Adidas Sweatpants (Dark Grey)",
    category: "pants",
    price: 37,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-39.jpeg",
    description: "Versatile dark grey Adidas tracksuit pants ideal for relaxed wear and training."
  },
 {
    id: 40,
    name: "Windbreaker Jacket (Black)",
    category: "jackets",
    price: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-40.jpeg",
    description: "Sleek black hooded windbreaker jacket with sleeve branding and weather-resistant fabric."
  },
  {
    id: 41,
    name: "Windbreaker Jacket (White)",
    category: "jackets",
    price: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-41.jpeg",
    description: "Clean white hooded sports jacket with zip closure and light breathable feel."
  },
  {
    id: 42,
    name: "Windbreaker Jacket (Grey)",
    category: "jackets",
    price: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-42.jpeg",
    description: "Modern grey athletic windbreaker with adjustable hood and durable outer shell."
  },
  {
    id: 43,
    name: "Windbreaker Jacket (Olive)",
    category: "jackets",
    price: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-43.jpeg",
    description: "Stylish olive green hooded training jacket designed for active outdoor wear."
  },
  {
    id: 44,
    name: "Windbreaker Jacket (Navy)",
    category: "jackets",
    price: 48,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-44.jpeg",
    description: "Classic navy blue windbreaker jacket with high neck protection and side pockets."
  },
  {
    id: 45,
    name: "Adidas Puffer Jacket (Black)",
    category: "jackets",
    price: 65,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-45.jpeg",
    description: "Warm black Adidas insulated puffer jacket built for maximum cold-weather comfort."
  },
  {
    id: 47,
    name: "Adidas Puffer Jacket (Olive)",
    category: "jackets",
    price: 65,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-47.jpeg",
    description: "Insulated olive green Adidas puffer jacket featuring padded protection and iconic logo."
  },
  {
    id: 48,
    name: "The North Face Jacket (Beige/Navy)",
    category: "jackets",
    price: 78,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-48.jpeg",
    description: "Premium two-tone beige and navy blue outdoor hooded jacket built for warmth and wind resistance."
  },
  {
    id: 49,
    name: "Adidas Windbreaker (Black)",
    category: "jackets",
    price: 54,
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/id-49.jpeg",
    description: "Classic black Adidas hooded windbreaker featuring signature 3-stripes along sleeves."
  },
  {
    id: 50,
    name: "Nike Duffle Bag (Black)",
    category: "accessories",
    price: 45,
    sizes: ["One Size"],
    image: "/images/id-50.jpeg",
    description: "Spacious black Nike gym duffle bag with durable handles and separate shoe compartment."
  },
  {
    id: 51,
    name: "Nike Duffle Bag (Grey)",
    category: "accessories",
    price: 45,
    sizes: ["One Size"],
    image: "/images/id-51.jpeg",
    description: "Versatile grey and black Nike travel duffle bag built with multiple zippered pockets."
  },
  {
    id: 52,
    name: "Sport Backpack (Black)",
    category: "accessories",
    price: 35,
    sizes: ["One Size"],
    image: "/images/id-52.jpeg",
    description: "Minimalist black athletic backpack with padded shoulder straps and laptop compartment."
  },
  {
    id: 53,
    name: "Nike Backpack (Black)",
    category: "accessories",
    price: 23,
    sizes: ["One Size"],
    image: "/images/id-53.jpeg",
    description: "Stylish black Nike backpack featuring bold front graphic logo and water-resistant base."
  },
  {
    id: 54,
    name: "Gym Towel (Black)",
    category: "accessories",
    price: 12,
    sizes: ["One Size"],
    image: "/images/id-54.jpeg",
    description: "Soft and highly absorbent black gym towel designed for intense workouts."
  },
  {
    id: 55,
    name: "Gym Towel (Blue)",
    category: "accessories",
    price: 12,
    sizes: ["One Size"],
    image: "/images/id-55.jpeg",
    description: "Quick-drying blue athletic towel made with premium moisture-wicking fabric."
  },
  {
    id: 56,
    name: "Gym Towel (White)",
    category: "accessories",
    price: 12,
    sizes: ["One Size"],
    image: "/images/id-56.jpeg",
    description: "Clean white sports workout towel offering lightweight maximum absorption."
  },
  {
    id: 57,
    name: "Gym Gloves (Black)",
    category: "accessories",
    price: 22,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/id-57.jpeg",
    description: "Durable black gym training gloves with non-slip palm grip and wrist support."
  },
  {
    id: 58,
    name: "Gym Gloves (Purple)",
    category: "accessories",
    price: 22,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/id-58.jpeg",
    description: "Breathable purple workout gloves providing comfort and enhanced grip strength."
  },
  {
    id: 59,
    name: "Gym Gloves (Grey)",
    category: "accessories",
    price: 22,
    sizes: ["S", "M", "L", "XL"],
    image: "/images/id-59.jpeg",
    description: "Lightweight grey athletic gloves designed for weightlifting and fitness training."
  },
  {
    id: 60,
    name: "Sports Cap (Black)",
    category: "accessories",
    price: 18,
    sizes: ["One Size"],
    image: "/images/id-60.jpeg",
    description: "Classic black sports cap with adjustable back strap and breathable panels."
  },
  {
    id: 61,
    name: "Sports Cap (Light Grey)",
    category: "accessories",
    price: 18,
    sizes: ["One Size"],
    image: "/images/id-61.jpeg",
    description: "Lightweight grey athletic cap designed for outdoor training and sun protection."
  },
  {
    id: 62,
    name: "Adidas Cap (Blue)",
    category: "accessories",
    price: 20,
    sizes: ["One Size"],
    image: "/images/id-62.jpeg",
    description: "Stylish blue Adidas sports cap featuring front logo and comfortable fit."
  },
  {
    id: 63,
    name: "Sports Crew Socks (Black)",
    category: "accessories",
    price: 12,
    sizes: ["One Size"],
    image: "/images/id-63.jpeg",
    description: "Comfortable black athletic crew socks with cushioned sole and breathable stretch."
  },
  {
    id: 64,
    name: "Nike Crew Socks (White)",
    category: "accessories",
    price: 14,
    sizes: ["One Size"],
    image: "/images/id-64.jpeg",
    description: "Classic white Nike athletic crew socks with ribbed cuffs and swoosh logo."
  },
  {
    id: 65,
    name: "Sports Crew Socks (Grey)",
    category: "accessories",
    price: 12,
    sizes: ["One Size"],
    image: "/images/id-65.jpeg",
    description: "Soft heather grey workout socks offering arch support and sweat absorption."
  },
  {
    id: 66,
    name: "Sport Water Bottle (Grey)",
    category: "accessories",
    price: 15,
    sizes: ["750ml"],
    image: "/images/id-66.jpeg",
    description: "Durable grey stainless steel sport water bottle with leak-proof cap."
  },
  {
    id: 67,
    name: "Protein Shaker Bottle (Black)",
    category: "accessories",
    price: 10,
    sizes: ["600ml"],
    image: "/images/id-67.jpeg",
    description: "Black fitness protein shaker bottle with mixing compartments and ball."
  },
  {
    id: 68,
    name: "Sport Water Bottle (Red)",
    category: "accessories",
    price: 12,
    sizes: ["750ml"],
    image: "/images/id-68.jpeg",
    description: "Vibrant red stainless steel sport water bottle built for daily hydration."
  },
  {
    id: 69,
    name: "Travel Tumbler (Grey)",
    category: "accessories",
    price: 8,
    sizes: ["500ml"],
    image: "/images/id-69.jpeg",
    description: "Insulated grey thermal travel mug for keeping drinks hot or cold."
  },
  {
    id: 70,
    name: "Travel Tumbler (Orange)",
    category: "accessories",
    price: 8,
    sizes: ["500ml"],
    image: "/images/id-70.jpeg",
    description: "Bright orange insulated thermal tumbler with leak-resistant lid."
  },{
    id: 71,
    name: "Running Shoes (Black)",
    category: "shoes",
    price: 75,
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "/images/id-71.jpeg",
    description: "Lightweight black athletic running shoes with responsive cushioning and breathable mesh."
  },
  {
    id: 72,
    name: "Sport Sneakers (White)",
    category: "shoes",
    price: 70,
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "/images/id-72.jpeg",
    description: "Clean white training sneakers featuring breathable design and durable grip sole."
  },
  {
    id: 73,
    name: "Classic Sport Shoes (White)",
    category: "shoes",
    price: 65,
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "/images/id-73.jpeg",
    description: "Versatile white athletic shoes built for all-day comfort and training performance."
  },


























]; export default productsList;