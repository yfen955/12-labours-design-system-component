<template>
  <div class="breadcrumb">
    <div v-for="item in breadcrumb" :key="item.label" class="breadcrumb-link">
      <template v-if="linkComponent === 'nuxt-link' || linkComponent === 'router-link'">
        <component :is="linkComponent" :to="item.to">
          {{ item.label.toUpperCase() }}
        </component>
      </template>
      <template v-else>
        <component :is="linkComponent" :href="item.to">
          {{ item.label.toUpperCase() }}
        </component>
      </template>
      <i class="arrow el-icon-arrow-right"></i>
    </div>
    <div class="page-title">{{ formatTitle(title).toUpperCase() }}</div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbTrail',

  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    linkComponent: {
      type: String,
      default: 'nuxt-link'
    }
  },

  methods: {
    /**
     * Formats breadcrumb length
     * 32 characters max
     * Truncation should occur at the end of a
     * word and not part way through a word.
     * @param {String} breadcrumb
     */
    formatTitle: function(title) {
      const truncated = title.replace(/^(.{32}[^\s]*).*/, '$1')
      return truncated.length === title.length
        ? title
        : `${truncated}...`
    }
  }
}
</script>

<style  lang="scss">
@import '../../../assets/_variables.scss';
.breadcrumb { 
  height:2.5rem;
  box-sizing: border-box; 

  display: flex;
  background: $grey;
  color: $cochlear;
  font-size: 0.75rem;
  line-height:0.88rem;
  
  padding-top:0.88rem;
  padding-bottom:0.75rem;
  padding-left: 3.75rem;
   
  .breadcrumb-link {
    align-items: center;
    display: flex;
    flex-shrink: 0; 
  }

  a {
    font-size:0.75rem;
    line-height:0.88rem;
    text-decoration: none !important;
    color: $cochlear !important;
    &:hover{
      font-weight: bold;
    }
  }

  .arrow {
    font-size: 1rem;
    padding:0 0.75rem;
  }
  
  .page-title{
    font-weight:bold;
  }
}
</style>
