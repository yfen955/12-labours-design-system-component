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
        cards: [
          {
            type: "Thumbnail",
            imageUrl: "imageUrl1",
            filename: "filename1",
            id: "id1",
            imageDownload: "imageDownload1",
          },
          {
            type: "Scaffold",
            imageUrl: "imageUrl2",
            filename: "filename2",
            id: "id2",
            imageDownload: "",
          },
          {
            type: "Flatmap",
            imageUrl: "",
            filename: "filename3",
            id: "id3",
            imageDownload: "",
          },
          {
            type: "Plot",
            imageUrl: "imageUrl4",
            filename: "filename4",
            id: "id4",
            imageDownload: "",
          },
        ],
      };
    },
    template: `
        <div>
            <carousel-card :cards=cards />
        </div>
    `,
  };
};
