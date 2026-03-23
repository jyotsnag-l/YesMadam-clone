
import type { Service, Testimonial, NewsLogo, InstagramPost } from './types';

export const salonServices: Service[] = [
  { id: 1, name: "Waxing", imageUrl: "https://picsum.photos/id/1060/300/300" },
  { id: 2, name: "Facial & Cleanup", imageUrl: "https://picsum.photos/id/1027/300/300" },
  { id: 3, name: "Manicure", imageUrl: "https://picsum.photos/id/326/300/300" },
  { id: 4, name: "Pedicure", imageUrl: "https://picsum.photos/id/399/300/300" },
  { id: 5, name: "Threading & Face Wax", imageUrl: "https://picsum.photos/id/435/300/300" },
  { id: 6, name: "Bleach & Detan", imageUrl: "https://picsum.photos/id/579/300/300" },
  { id: 7, name: "Hair Care", imageUrl: "https://picsum.photos/id/659/300/300" },
  { id: 8, name: "Mehendi", imageUrl: "https://picsum.photos/id/835/300/300" },
  { id: 9, name: "Makeup", imageUrl: "https://picsum.photos/id/977/300/300" },
  { id: 10, name: "Pre-Bridal", imageUrl: "https://picsum.photos/id/1074/300/300" },
];

export const trendingServices: Service[] = [
    { id: 1, name: "Head Massage", imageUrl: "https://picsum.photos/id/219/300/300" },
    { id: 2, name: "Full Body Massage", imageUrl: "https://picsum.photos/id/119/300/300" },
    { id: 3, name: "Hair Spa", imageUrl: "https://picsum.photos/id/342/300/300" },
    { id: 4, name: "Classic Manicure", imageUrl: "https://picsum.photos/id/40/300/300" },
    { id: 5, name: "Detan Pack", imageUrl: "https://picsum.photos/id/292/300/300" },
];

export const testimonials: Testimonial[] = [
  { id: 1, quote: "Absolutely love the service! The professional was punctual, hygienic, and did a fantastic job. Will definitely book again.", author: "Priya Sharma", location: "Delhi NCR" },
  { id: 2, quote: "It was my first time using Yes Madam and I am so impressed. The process was seamless and the service quality was top-notch.", author: "Anjali Verma", location: "Mumbai" },
  { id: 3, quote: "The best at-home salon experience I've ever had. Very professional and transparent pricing. Highly recommended!", author: "Sunita Reddy", location: "Bangalore" },
  { id: 4, quote: "Convenient, affordable, and high-quality services. What more could you ask for? A loyal customer for life.", author: "Rhea Kapoor", location: "Pune" },
];

export const newsLogos: NewsLogo[] = [
    { id: 1, name: "Forbes", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Forbes_logo.svg/200px-Forbes_logo.svg.png" },
    { id: 2, name: "YourStory", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/YourStory_logo.svg/200px-YourStory_logo.svg.png" },
    { id: 3, name: "The Times of India", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_Times_of_India_logo.svg/200px-The_Times_of_India_logo.svg.png" },
    { id: 4, name: "Business Standard", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Business_Standard_logo.svg/200px-Business_Standard_logo.svg.png" },
    { id: 5, name: "Inc42", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Inc42_logo.svg/200px-Inc42_logo.svg.png" },
];

export const instagramPosts: InstagramPost[] = [
    { id: 1, imageUrl: "https://picsum.photos/id/1015/400/400" },
    { id: 2, imageUrl: "https://picsum.photos/id/1016/400/400" },
    { id: 3, imageUrl: "https://picsum.photos/id/1018/400/400" },
    { id: 4, imageUrl: "https://picsum.photos/id/1019/400/400" },
    { id: 5, imageUrl: "https://picsum.photos/id/1021/400/400" },
    { id: 6, imageUrl: "https://picsum.photos/id/1022/400/400" },
];
