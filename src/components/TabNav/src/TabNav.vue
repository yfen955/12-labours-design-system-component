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
        line-height:21px;
        font-size:18px; 
        height:36px;   
        &.is-active {
          color:$app-primary-color;
          font-weight:700;
        }
      }
    }
  }
  &__active-bar {
    height: 5px;
  }
  &__header{
    margin:0px;
  }
}

</style>
