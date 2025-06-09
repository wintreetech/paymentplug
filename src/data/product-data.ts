import { IProduct } from "../types/product-d-t";

const product_data: IProduct[] = [
  {
    id: 1,
    img: "/assets/images/shop/img_01.jpg",
    title: "Milk and Honey",
    price: 11.99,
    discount: 0.17,
    category: "books",
    quantity: 38,
    old_price: 14.99,
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 2,
    img: "/assets/images/shop/img_02.jpg",
    title: "The Great Gatsby",
    price: 12.49,
    discount: 0.15,
    category: "visiting-card",
    quantity: 25,
    old_price: 14.99,
    related_images: [
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
      "/assets/images/shop/img_04.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 3,
    img: "/assets/images/shop/img_03.jpg",
    title: "To Kill a Mockingbird",
    price: 10.99,
    discount: 0.1,
    category: "magazine",
    quantity: 42,
    old_price: 12.99,
    related_images: [
      "/assets/images/shop/img_03.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_01.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 4,
    img: "/assets/images/shop/img_04.jpg",
    title: "Harry Potter",
    price: 14.99,
    discount: 0.05,
    category: "books",
    quantity: 30,
    old_price: 15.99,
    related_images: [
      "/assets/images/shop/img_04.jpg",
      "/assets/images/shop/img_03.jpg",
      "/assets/images/shop/img_05.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 5,
    img: "/assets/images/shop/img_05.jpg",
    title: "He first Waves",
    price: 9.99,
    discount: 0.2,
    category: "visiting-card",
    quantity: 20,
    old_price: 12.49,
    related_images: [
      "/assets/images/shop/img_05.jpg",
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_06.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 6,
    img: "/assets/images/shop/img_06.jpg",
    title: "The Catcher in the Rye",
    price: 11.49,
    discount: 0.1,
    quantity: 35,
    old_price: 12.99,
    category: "magazine",
    related_images: [
      "/assets/images/shop/img_06.jpg",
      "/assets/images/shop/img_03.jpg",
      "/assets/images/shop/img_01.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 7,
    img: "/assets/images/shop/img_07.jpg",
    title: "Pride and Prejudice",
    price: 8.99,
    discount: 0.15,
    category: "books",
    quantity: 28,
    old_price: 10.49,
    related_images: [
      "/assets/images/shop/img_07.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_04.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 8,
    img: "/assets/images/shop/img_08.jpg",
    title: "The Hobbit",
    price: 13.99,
    discount: 0.05,
    category: "visiting-card",
    quantity: 22,
    old_price: 14.99,
    related_images: [
      "/assets/images/shop/img_08.jpg",
      "/assets/images/shop/img_05.jpg",
      "/assets/images/shop/img_06.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 9,
    img: "/assets/images/shop/img_09.jpg",
    title: "The Lord of the Rings",
    price: 22.99,
    discount: 0.1,
    category: "magazine",
    quantity: 18,
    old_price: 24.99,
    related_images: [
      "/assets/images/shop/img_09.jpg",
      "/assets/images/shop/img_07.jpg",
      "/assets/images/shop/img_04.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },

  {
    id: 10,
    img: "/assets/images/shop/img_09.jpg",
    title: "The Hunger Games",
    price: 10.99,
    discount: 0.15,
    category: "magazine",
    quantity: 32,
    old_price: 12.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 11,
    img: "/assets/images/shop/img_08.jpg",
    title: "The Alchemist",
    price: 11.99,
    discount: 0.1,
    category: "books",
    quantity: 27,
    old_price: 13.49,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 12,
    img: "/assets/images/shop/img_07.jpg",
    title: "Brave New World",
    price: 9.99,
    discount: 0.2,
    category: "visiting-card",
    quantity: 23,
    old_price: 12.49,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 13,
    img: "/assets/images/shop/img_06.jpg",
    title: "The Shining",
    price: 11.49,
    discount: 0.05,
    category: "magazine",
    quantity: 31,
    old_price: 11.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 14,
    img: "/assets/images/shop/img_05.jpg",
    title: "The Da Vinci Code",
    price: 12.99,
    discount: 0.1,
    category: "visiting-card",
    quantity: 29,
    old_price: 14.49,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 15,
    img: "/assets/images/shop/img_06.jpg",
    title: "A Song of Ice and Fire",
    price: 18.99,
    discount: 0.15,
    category: "visiting-card",
    quantity: 17,
    old_price: 21.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 16,
    img: "/assets/images/shop/img_04.jpg",
    title: "The Chronicles of Narnia",
    price: 15.99,
    discount: 0.05,
    category: "magazine",
    quantity: 24,
    old_price: 16.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 17,
    img: "/assets/images/shop/img_03.jpg",
    title: "The Road",
    price: 10.49,
    discount: 0.1,
    category: "magazine",
    quantity: 36,
    old_price: 11.49,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 18,
    img: "/assets/images/shop/img_02.jpg",
    title: "The Girl on the Train",
    price: 11.99,
    discount: 0.2,
    category: "visiting-card",
    quantity: 21,
    old_price: 14.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 19,
    img: "/assets/images/shop/img_01.jpg",
    title: "Dune",
    price: 14.99,
    discount: 0.05,
    category: "books",
    quantity: 26,
    old_price: 15.99,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 20,
    img: "/assets/images/shop/img_09.jpg",
    title: "The Silent Patient",
    price: 12.49,
    discount: 0.15,
    category: "books",
    quantity: 33,
    old_price: 14.49,
    related_images: [
      "/assets/images/shop/img_01.jpg",
      "/assets/images/shop/img_02.jpg",
      "/assets/images/shop/img_03.jpg",
    ],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: "/assets/images/blog/avatar_02.jpg",
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: "/assets/images/blog/avatar_01.jpg",
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
];

export default product_data;
