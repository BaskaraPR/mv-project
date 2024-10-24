interface Company {
  icon: string;
  title: string;
  description: string;
  highestBid: number;
}

export const companies: Company[] = [
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Logo Design",
    description: "Our team is proficient in a variety of services that can help improve productivity of your company or institution.",
    highestBid: 500,
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Graphic Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Mobile Apps",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 300,
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Logo Design",
    description: "Our team is proficient in a variety of services that can help improve productivity of your company or institution.",
    highestBid: 500,
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Graphic Design",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 500,
  },
  {
    icon: "/placeholder.svg?height=48&width=48",
    title: "Need a SEO",
    description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
    highestBid: 300,
  },
];

export const services = [
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Logo Design",
        description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
        highestBid: 500,
        borderStyle: "left" as const,
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
        title: "Graphic Design",
        description: "With our ability to produce websites, mobile apps and ios apps we will help solve your problem with good and useful products.",
        highestBid: 500,
        borderStyle: "full" as const,
      },
      {
        icon: "/placeholder.svg?height=48&width=48",
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
    
    