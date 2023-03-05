import TabNav from "@/components/TabNav/src/TabNav.vue";

export default {
  title: "Components/TabNav",
  includeStories: [],
};

export const WithTabs = () => {
  return {
    components: { TabNav },
    data() {
      return {
        activeTab: "current",
        tabs: [
          {
            label: "Upcoming",
            name: "upcoming",
          },
          {
            label: "Current",
            name: "current",
          },
          {
            label: "Past",
            name: "past",
          },
        ],
      };
    },
    template: `
      <div>
        <tab-nav :tabs="tabs" :active-tab="activeTab" />
      </div>
    `,
  };
};
