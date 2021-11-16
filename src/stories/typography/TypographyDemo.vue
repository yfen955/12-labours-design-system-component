<template>
  <div class="typography-demo">
    <div class="details">
      <div class="name">{{ typography.name }}</div>
      <p v-if="typography.usage" class="mb-0"> ({{ typography.usage }})</p>
      <p class="mb-0">font: {{ typography.font }} / font-size: {{ typography.fontSize }} </p>
      <p class="mb-0">line-height: {{ typography.lineHeight }}</p>
      <p class="mb-0"><span v-if="typography.fontWeight">weight: {{typography.weightDisplay}} /</span> color: {{ typography.color }}</p>
      <p v-if="typography.showBackgroundColor" class="mb-0">background-color: {{ typography.backgroundColor }}</p>
      <p v-if="typography.textDecoration" class="mb-0">decoration: {{ typography.textDecoration }}</p>
      <p v-if="typography.fontStyle" class="mb-0">style: {{ typography.fontStyle }}</p>
    </div>
    <div class="example">
      <span :style="typography">
        A quick brown fox jumps over a lazy dog.
      </span>
      <span v-if="typography.note" class="mt-8 note"> <em>Note</em>: {{ typography.note }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TypographyDemo',

  props: {
    typography: {
      default: () => {
        return {
          name: '',
          font:'',
          fontSize: '',
          lineHeight: '',
          fontWeight: '',
          color: '',
          fontStyle:''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.typography-demo {
  display: flex;
  font-size:1rem;   
}
.details {
  flex-basis: 15.63rem;
  flex-shrink: 0;
  margin-right: 3.13rem;
}

.example {
  flex: 1;
  span {
    color: #3e3e3e;
    display: inline-block;
  }
}
.name {
  text-transform: uppercase;
}
.note {
  font-size: 0.85rem;
  em  {
    font-style: normal;
    text-transform: uppercase;
  }
}
</style>
