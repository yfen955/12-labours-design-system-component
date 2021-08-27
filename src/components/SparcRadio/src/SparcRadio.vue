<template>
  <el-radio
    :label="label"
    :disabled="disabled"
    v-model="current"
  >
    {{ display }}
  </el-radio>
</template>

<script>
export default {
  name: 'SparcRadio',

  props: {
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    display: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    current: {
      get: function() {
        return this.value
      },
      set: function(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/_variables.scss";
::v-deep .el-radio__input {
    &.is-disabled {
      background-color:$cochlear;
      border:1px solid $lineColor1;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      opacity: 35%;
    &.is-checked {
      .el-radio__inner {
        background-color: $lineColor1;
        &::after {
          opacity: 80%;
        }
      }
    }
  }
}

::v-deep .el-radio__label {
    font-size: 16px;
    line-height: 20px;
    font-weight:normal;
    color:$grey;
    font-family:Arimo;
  
}

::v-deep .el-radio__input {
       .el-radio__inner {
          &:hover{
            border-color: $lineColor1 !important;
         }
        background-color: $cochlear;
        width: 24px;
        height: 24px;
      }
      &.is-checked{
        .el-radio__inner {
          &:hover{
            border-color: $lineColor1 !important;
         }
          background-color: $cochlear;
          border:1px solid $blue;
          width: 24px;
          height: 24px;
          &::after {
            background: $blue;
            border:1px solid $blue;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            opacity: 80%;
        }
      }
    }
}

  ::v-deep .el-radio__input.is-checked + .el-radio__label{
    color: $grey;

  }

  .el-radio {
  margin-left: 12px;
  padding-top: 8px;
  &:first-child {
    padding-top: 8px;
  }
}

</style>