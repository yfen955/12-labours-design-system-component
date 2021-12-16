<template>
  <div class="text-area">
    <el-input
      type="textarea"
      v-model="value" 
      :placeholder="placeholderText"
      :resize="resize"
      :maxlength="maxLength"
      :minlength="minLength"
      :rows="numRows"
      :disabled="isDisabled"
      @input="textChange"
    />
    <div class="label-word-count">
      Max length: {{maxLength}} - Used: {{value.length}} - Remaining: {{maxLength-(value.length)}}
      <span v-if="showMinSpan">&nbsp;&nbsp;/ Min Length:{{minLength}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultilineText',
  props: {
    numRows: {
      type: Number,
      default: 5
    },
    maxLength: {
      type: Number,
      required:true
    },
    minLength: {
      type: Number
    },
    resize: {
      type: String,
      default: 'none' ,
      validator: propValue => {
        const listOfAvailableExt = ["none", "vertical"]  //"both","horizontal" - not allowing for now
        const isValidOption = listOfAvailableExt.some(ext =>propValue.endsWith(ext))
        return isValidOption;
      }
    },
    placeholderText:{
      type:String,
      default:'Please input'
    },
    isDisabled:{
      type:Boolean,
      default:false
    }
  },

  data() {
    return {
      value: '',
      showMinSpan:false
    }
  },
  
  methods: {
    textChange: function(input) {
      if(this.minLength)
        this.showMinSpan=this.value.length<this.minLength
      this.$emit('text-change', input)
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../../../assets/_variables.scss';

.text-area{
  display:flex;
  flex-direction:column; 
}

.label-word-count {
  margin-top: 0.75rem;
  font: italic normal normal 0.875rem/1rem $font-family;
  color: $grey;
}

</style>