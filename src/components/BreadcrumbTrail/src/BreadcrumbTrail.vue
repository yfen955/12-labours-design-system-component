<template>
  <div class="breadcrumb">
    <div v-for="item in breadcrumb" :key="item.label" class="breadcrumb-link">
      <template v-if="linkComponent === 'nuxt-link' || linkComponent === 'router-link'">
        <component :is="linkComponent" :to="item.to">
          {{ item.label }}
        </component>
      </template>
      <template v-else>
        <component :is="linkComponent" :href="item.to">
          {{ item.label }}
        </component>
      </template>
      <span class="arrow">
        &gt;
      </span>
    </div>
    <span class="title">{{ formatTitle(title) }}</span>
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

<style lang="scss">
@import '../../../assets/_variables.scss';
.breadcrumb {
  align-items: flex-start;
  background: $grey;
  display: flex;
  font-size: 12px;
  margin-top: 0;
  height: 40px;
  line-height:40px;
  color: $cochlear;
  padding-left: 50px;
    
  .breadcrumb-link {
    align-items: center;
    display: flex;
    flex-shrink: 0;
   
  }

  a {
    font-size:12px !important;
    font-weight: normal;
    text-decoration: none !important;
    color: $cochlear !important;
    line-height:40px;
    padding-right: 16px;
    padding-left: 16px; 
      &:hover{
        font-weight: bold;
    }
  }

  .arrow {
    margin: 0 0.5rem;
    transform: translateY(-1px);
  }
}
</style>
