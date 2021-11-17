<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.name" :key="tab.name">
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  export default {

    name: 'TabNav',

    props: {
        tabs: {
        type: Array,
        default: () => []
        },
        activeTab: {
        type: String,
        default: ''
        }
    },

    methods: {
      handleClick(tab) {
        this.$emit('tabClick',tab.name)
      } 
    },

    created(){
      this.activeName = this.activeTab    
    }
  }
</script>


<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

::v-deep .el-tabs{
  &__nav{
    &.is-top{
      .el-tabs__item {    
        color:$text-color;
        line-height:1.3rem;
        font-size:1.13rem; 
        height:2.25rem;   
        &.is-active {
          color:$app-primary-color;
          font-weight:700;
        }
      }
    }
  }
  &__active-bar {
    height: 0.3rem;
  }
  &__header{
    margin:0;
  }
}

</style>
