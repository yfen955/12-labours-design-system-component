<template>
  <div class="pagination">
    <el-pagination
      :page-size="pageSize"
      :page-count="pageCount"
      layout="prev, pager, next"
      :total="totalCount"
      :current-page="selected"
      @current-change="selectPage"
      :pager-count="5"
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
  padding: 1rem 0;
  text-align: center;

  ul.el-pager{
    vertical-align:middle;

    li.more, li.number {
      &:first-child{
        margin-left: 0;
      }

      &:last-child{
        margin-right: 0;
      }

      background: $cochlear;
      border: 1px solid $blue;
      color: $blue;

      margin: 0 0.25rem 0 0.25rem;
      border-radius: 50%;
      min-width: 2rem; 
      height: 2rem; 
      font-size: 1rem; 
      font-weight: 600;  

      &.active{
        background:$blue;
        color:$cochlear;
        font-weight: 700;
      }
    }

    li.active + li{
      border-left: 1px solid !important;  //To prevent the fading of left border of item, next to active item
    }
  }

  .el-pagination 
  {
    .btn-next,.btn-prev{
      color: $blue;
      .el-icon{       
        font-size: 2rem;
        font-weight:400;
      }
    }

    button:disabled{
      opacity:0.3;
    }
  } 
}

</style>
