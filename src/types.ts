export interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
}

export const categories = {
  trending: [
    { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=169&fit=crop", rating: "98% Match", year: "2024" },
    { id: 2, title: "The Crown", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=169&fit=crop", rating: "95% Match", year: "2024" },
    { id: 3, title: "Dark", image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=169&fit=crop", rating: "92% Match", year: "2023" },
    { id: 4, title: "Wednesday", image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=169&fit=crop", rating: "89% Match", year: "2024" },
    { id: 5, title: "Money Heist", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=169&fit=crop", rating: "94% Match", year: "2023" },
  ],
  action: [
    { id: 6, title: "Extraction", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=169&fit=crop", rating: "91% Match", year: "2024" },
    { id: 7, title: "The Gray Man", image: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=300&h=169&fit=crop", rating: "88% Match", year: "2023" },
    { id: 8, title: "Red Notice", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=169&fit=crop", rating: "85% Match", year: "2024" },
    { id: 9, title: "Tyler Rake", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=169&fit=crop", rating: "90% Match", year: "2023" },
    { id: 10, title: "Six Underground", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=169&fit=crop", rating: "87% Match", year: "2024" },
  ],
  drama: [
    { id: 11, title: "The Queen's Gambit", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=169&fit=crop", rating: "96% Match", year: "2023" },
    { id: 12, title: "Ozark", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=169&fit=crop", rating: "93% Match", year: "2024" },
    { id: 13, title: "The Witcher", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=169&fit=crop", rating: "89% Match", year: "2023" },
    { id: 14, title: "Bridgerton", image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=169&fit=crop", rating: "91% Match", year: "2024" },
    { id: 15, title: "Peaky Blinders", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=169&fit=crop", rating: "94% Match", year: "2023" },
  ]
};