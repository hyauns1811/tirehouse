export const products = [
  {
    id: "p1",
    name: "Adjustable Coilover Kit - Lexus IS F",
    price: 275.00,
    category: "Suspension Kits",
    image: "/image/32 Way Damping Force Adjustability Coilover Spring Coilover Suspension Kit for Lexus IS F.png",
    description: "Premium adjustable coilover system designed to provide a smooth and customized ride. Crafted from durable materials for reliable suspension replacement."
  },
  {
    id: "p2",
    name: "Coilover Springs - BMW 3 Series",
    price: 195.50,
    category: "Suspension Kits",
    image: "/image/Coilover Suspension Springs Kit for BMW 3 (E46) 330i 325i 328i 320ci 323ci 1998-2005.jpg",
    description: "High-quality suspension springs kit offering improved handling and stability. Direct replacement fit for compatible models ensuring long-lasting durability."
  },
  {
    id: "p3",
    name: "Flow Forming Alloy Wheels",
    price: 165.00,
    category: "Rims / Wheels",
    image: "/image/Custom Passenger Car Wheels 15 16 17 Inch 4x100 4x114.3 5x100 6 5x114.3 mm Aftermarket Flow Forming Alloy Auto Car Wheel Rim Hub.jpg",
    description: "Sleek aftermarket alloy wheels available in multiple sizes. Built with advanced flow-forming techniques for enhanced strength and weight optimization."
  },
  {
    id: "p4",
    name: "High Bar Kit for Roof Racks",
    price: 210.00,
    category: "Roof Racks",
    image: "/image/FVC High Bar Kit for Roof Racks for 07-26 Sprinter, Transit & ProMaster - Low RoofHigh Roof.webp",
    description: "Sturdy high bar kit designed for secure cargo transport. Compatible with large vans and built to withstand varying weather conditions."
  },
  {
    id: "p5",
    name: "Forged Alloy Rims",
    price: 285.00,
    category: "Rims / Wheels",
    image: "/image/Factory Direct Forged Wheels 18 Inch 19 Inch Alloy Car Rims Wheels for Racing Cars.jpg",
    description: "Precision-crafted forged alloy wheels providing exceptional structural integrity. An excellent choice for upgrading your vehicle's appearance and stance."
  },
  {
    id: "p6",
    name: "Catback Exhaust - Lexus GS350",
    price: 299.99,
    category: "Exhaust Systems",
    image: "/image/Factory Wholesale Catback Exhaust System Muffler for Lexus GS350 3.5L 2012-2020 High-performance with Valve Racing Upgrade.jpg",
    description: "Stainless steel catback exhaust system engineered for efficient airflow and a refined sound profile. Direct bolt-on design for reliable replacement."
  },
  {
    id: "p7",
    name: "Catback Exhaust - BMW 135i/335i",
    price: 245.00,
    category: "Exhaust Systems",
    image: "/image/For BMW 135i 335i N54 2.0T Exhaust Catback System.jpg",
    description: "Premium replacement exhaust system crafted from corrosion-resistant materials. Designed to ensure optimal engine breathing and longevity."
  },
  {
    id: "p8",
    name: "Adjustable Suspension Kit - BMW E90",
    price: 230.00,
    category: "Suspension Kits",
    image: "/image/For BMW 3 Series E90 2006-2011 Coilovers Suspension Lowering Kit Adjustable Height 2011.jpg",
    description: "Complete height-adjustable suspension kit designed to restore and improve ride dynamics. Built to exact specifications for a seamless fit."
  },
  {
    id: "p9",
    name: "Slimline II Roof Rack - Ford",
    price: 289.00,
    category: "Roof Racks",
    image: "/image/Front Runner Ford F-250F-350 Crew Cab Slimline II Roof Rack Kit.jpg",
    description: "Heavy-duty, low-profile roof rack system maximizing your vehicle's cargo capacity. Features a modular design for versatile accessory mounting."
  },
  {
    id: "p10",
    name: "Offroad Shock Absorber Lift Kit",
    price: 260.00,
    category: "Suspension Kits",
    image: "/image/High Performance Offroad Shock Absorber Coilover Suspension 0-2 LIFT KIT.png",
    description: "Robust offroad shock absorber and coilover assembly. Delivers enhanced clearance and ride comfort for various driving terrains."
  },
  {
    id: "p11",
    name: "Modular Roof Rack - Ford Ranger",
    price: 199.00,
    category: "Roof Racks",
    image: "/image/Modular Roof Rack for the Ford Ranger.webp",
    description: "Custom-fit modular roof rack providing robust support for luggage and equipment. Powder-coated finish ensures excellent rust resistance."
  },
  {
    id: "p12",
    name: "Aluminum Roof Rack - Toyota Tundra",
    price: 225.00,
    category: "Roof Racks",
    image: "/image/Toyota Tundra Roof Rack(.avif",
    description: "Durable aluminum roof rack designed specifically for seamless integration. Offers a secure platform for all your travel essentials."
  },
  {
    id: "p13",
    name: "Universal Dual Valve Exhaust",
    price: 275.50,
    category: "Exhaust Systems",
    image: "/image/Universal T Style Electronic Dual Valve Stainless Steel Exhaust System with First Generation Controller Full Set for Auto Tuning.jpg",
    description: "Electronic dual-valve exhaust system featuring stainless steel construction. Allows for customizable airflow management and reliable durability."
  },
  {
    id: "p14",
    name: "Universal Aluminum Sedan Wheels",
    price: 180.00,
    category: "Rims / Wheels",
    image: "/image/XL Wheels 16 17 18 19 Inch 5x112 5x120 Aluminum Wheels for Sedan Car Honda Mini Volkswagen Ford Audi.png",
    description: "Versatile aluminum wheels compatible with a wide range of sedans. Combines a timeless design with modern manufacturing for daily driving reliability."
  }
];

export function getProductById(id) {
  return products.find(product => product.id === id);
}
