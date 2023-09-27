import './demo-styles.scss';
import CarouselCard from "@/components/CarouselCard/src/CarouselCard.vue";

export default {
  title: "Components/CarouselCard",
  includeStories: [],
};

export const WithCards = () => {
  return {
    component: { CarouselCard },
    data() {
      return {
        all_models: new Set(['Thumbnail', 'Scaffold', 'Flatmap', 'Plot']),
        cards_list: [
          {
            type: "Thumbnail",
            url: "imageUrl1",
            filename: "filename1",
            id: "id1",
          },
          {
            type: "Scaffold",
            url: "imageUrl2",
            filename: "filename2",
            id: "id2",
          },
          {
            type: "Flatmap",
            imaurlgeUrl: "",
            filename: "Pig",
            id: "Pig",
          },
          {
            type: "Plot",
            url: "imageUrl4",
            filename: "filename4",
            id: "id4",
          },
        ],
      };
    },
    template: `
        <div>
          <carousel-card :cards="cards_list" :all_models="all_models" />
        </div>
    `,
  };
};
