import CarouselCard from "./src/CarouselCard";

/* istanbul ignore next */
CarouselCard.install = function(Vue) {
  Vue.component(CarouselCard.name, CarouselCard);
};

export default CarouselCard;
