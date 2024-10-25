

interface Company {
  icon: string;
  title: string;
  description: string;
  highestBid: number;
}

export const companies: Company[] = [
  {
    icon: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0",
    title: "Logo Design",
    description: "Our team is proficient in a variety of services that can help improve productivity of your company or institution.",
    highestBid: 500,
  },
  {
    icon: "https://img.freepik.com/premium-photo/canva-logo-illustration-icon_895118-4417.jpg",
    title: "Graphic Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQPZ3SZIf-LF0J_m3kJAH03WnOrkMxLuneA&s",
    title: "Mobile Apps",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 300,
  },
  {
    icon: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0",
    title: "Logo Design",
    description: "Our team is proficient in a variety of services that can help improve productivity of your company or institution.",
    highestBid: 500,
  },
  {
    icon: "https://img.freepik.com/premium-photo/canva-logo-illustration-icon_895118-4417.jpg",
    title: "Graphic Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQPZ3SZIf-LF0J_m3kJAH03WnOrkMxLuneA&s",
    title: "Need a SEO",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 300,
  },
];

export const services = [
  {
    icon: "https://img.freepik.com/premium-vector/abstract-geometric-company-logo-ring-circle_205544-12792.jpg?w=826",
    title: "Logo Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
    borderStyle: "left" as const,
  },
  {
    icon: "https://img.freepik.com/premium-vector/design-vektor-graphick-logo-business-finance-modern-with-arrow-chart_405828-178.jpg?w=740",
    title: "Graphic Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
    borderStyle: "full" as const,
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQPZ3SZIf-LF0J_m3kJAH03WnOrkMxLuneA&s",
    title: "Mobile App",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 300,
    borderStyle: "right" as const,
  },
];

export const categories = [
      {
        id: "1",
        name: "Graphics Design",
        image: "https://www.avanse.com/blogs/images/Your%20guide%20to%20a%20Master%E2%80%99s%20in%20Public%20Administration.jpg",
        slug: "graphics-design",
      },
      {
        id: "2",
        name: "Cartoon Animation",
        image: "https://www.avanse.com/blogs/images/next-top-6.jpg",
        slug: "cartoon-animation",
      },
      {
        id: "3",
        name: "Illustration",
        image: "https://www.avanse.com/blogs/images/next-top-47.jpg",
        slug: "illustration",
      },
      {
        id: "4",
        name: "Flyers & Vouchers",
        image: "https://www.avanse.com/blogs/images/How%20to%20select%20the%20right%20university%20for%20your%20study%20abroad%20journey.jpg",
        slug: "flyers-vouchers",
      },
      {
        id: "5",
        name: "Logo Design",
        image: "https://www.avanse.com/blogs/images/blog-36.jpg",
        slug: "logo-design",
      },
      {
        id: "6",
        name: "Social Graphics",
        image: "https://www.avanse.com/blogs/images/17nov-blog-2023.jpg",
        slug: "social-graphics",
      },
      {
        id: "7",
        name: "Article Writing",
        image: "https://www.aimlay.com/wp-content/uploads/2022/03/Article-Writing-1.jpg",
        slug: "article-writing",
      },
      {
        id: "8",
        name: "Video Editing",
        image: "https://www.avanse.com/blogs/images/blogs-migration-88.jpg",
        slug: "video-editing",
      },
];
    
    