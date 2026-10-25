export interface Client {
  id: string;
  name: string;
  category: string;
  location: string;
  tagline?: string;
  logo: string;
  description?: string;
  results?: string[];
}

export const CLIENTS_DATA: Client[] = [
  {
    id: "client-maharaj-k-momos",
    name: "Maharaj K Momos",
    category: "Food & Dining",
    location: "Bopal, Ahmedabad, Gujarat",
    tagline: "Authentic Darjeeling Momos & Himalayan Street Delicacies",
    logo: "/maharaj-k-momos-logo.jpg",
    description: "Scaled local footfalls and daily table turnover through hyper-local Meta geo-targeted ads, signature sizzler reels, and instant 5-star tap NFC review cards.",
    results: [
      "140K+ Organic Local Reel Views",
      "4.8 Google Maps Rating (300+ Verified Taps)",
      "3.2x Weekend Footfall Surge"
    ]
  }
];

export const CATEGORIES = ["All", "Food & Dining", "Retail", "Healthcare", "Services"] as const;
