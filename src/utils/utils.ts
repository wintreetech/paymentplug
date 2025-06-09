export const animationCreate = () => {
  import("wow.js").then((module) => {
    const WOW = module.default;
    const wow = new WOW({ live: false })
    wow.init();
  });
};


export const calculateDiscountedPrice = (price:number, discount:number) => {
  return (price - (price * discount) / 100).toFixed(2);
};