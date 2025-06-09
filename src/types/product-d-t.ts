

export interface IProduct {
  id: number;
  img: string;
  title: string;
  category: string;
  price: number;
  discount: number;
  quantity: number;
  old_price?: number;
  orderQuantity?: number;
  sm_desc: string;
  details: {
    specifications: string;
    main_features: string[];
  };
  related_images:string[]
  reviews: {
    id: number;
    user: string;
    name: string;
    review_text: string;
    rating: number;
  }[]
}
