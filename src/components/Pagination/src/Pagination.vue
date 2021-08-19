<template>
  <div class="pagination">
    <el-pagination
      :page-size="pageSize"
      :page-count="pageCount"
      layout="prev, pager, next"
      :total="totalCount"
      :current-page="selected"
      @current-change="selectPage"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    selected: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    totalCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pageCount: function() {
      return Math.ceil(this.totalCount / this.pageSize)
    }
  },
  methods: {
    /**
     * Emit select-page event
     */
    selectPage: function(page) {
      this.$emit('select-page', page)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/_variables.scss";
 .pagination {
  padding-top: 1em;
  text-align: center;
  
   
  button.btn-prev {
    background: none;
    padding: 0px;
    color: $blue;
  }

  button.btn-next {
    background: none;
    padding: 0px;
    margin-left: 16px;
    color: $blue;
  }

  li.more,
  li.number {
    &.active{
         background:$blue;
         color:$cochlear;
         font-weight: bold;
 }
  
    &:first-child{
      margin-left: 16px;
    }
    background: $cochlear;
    border: 1px solid $blue;
    margin-left: 10px;
    border-radius: 50%;
    width: 24px;
    height: 24px; 
    line-height: 24px;
    min-width: 24px; 
    font-size: 12px;
    color: $blue;
    font-weight: normal;
    text-align: center;
    
    
  }
  .el-pager li.active + li{
    border-left: 1px solid !important;
  }
  .el-pager .more::before{
    line-height: 24px !important;
  }
}


</style>
