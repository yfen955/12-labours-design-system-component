<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="tab in tabs"
        :label="tab.label"
        :name="tab.name"
        :key="tab.name"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "TabNav",

  data() {
    return {
      activeName: "",
    };
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    activeTab: {
      type: String,
      default: "",
    },
  },

  watch: {
    activeTab: function() {
      this.activeName = this.activeTab;
    },
  },

  methods: {
    handleClick(tab) {
      this.$emit("tabClick", tab.name);
    },
  },

  created() {
    this.activeName = this.activeTab;
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/_variables.scss";

::v-deep .el-tabs {
  &__nav {
    &.is-top {
      .el-tabs__item {
        color: $text-color;
        line-height: 1rem;
        font-size: 1.15rem;
        height: 2.25rem;
        &.is-active {
          color: $app-primary-color;
          font-weight: bold;
        }
      }
    }
  }
  &__active-bar {
    height: 0.3rem;
  }
  .el-tabs__nav-prev {
    font-size: large;
  }
  .el-tabs__nav-next {
    font-size: large;
  }
}
</style>
