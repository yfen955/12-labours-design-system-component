<template>
  <el-checkbox
    :true-label="label"
    :false-label="n_lable"
    :disabled="disabled"
    v-model="current"
  >
    {{ display }}
  </el-checkbox>
</template>

<script>
export default {
  name: 'Checkbox',

  props: {
    value: {
      type: [String, Number, Boolean],
      required: true
    },
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    n_lable: {
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

::v-deep .el-checkbox__input{
    .el-checkbox__inner{
      border-radius: 0px;
      &::after{
        transform: rotate(45deg) scale(2.25);
        transition: transform 0s;
        border-style: hidden;
        left: 10px;

      }
  }
}

::v-deep .el-checkbox__input.is-disabled .el-checkbox__inner {
   background: $lineColor1;
   opacity: 35%;
}

::v-deep .el-checkbox__label {
    line-height: 20px;
    color:$grey;
    font: {
      size: 16px;
      weight:normal;
      family:Arimo;
    }
  
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner{
      background: $cochlear;
      &::after{
        content: "";
        border: 1px solid $blue;
        border-left: 0;
        border-top: 0;
        height: 7px;
        position: absolute;
        left: 10px;
        top: 5px;
        transform: rotate(45deg) scale(2.25);
        transition: transform 0s;
        width: 3px;
       
      }


}

::v-deep .el-checkbox__input {
       .el-checkbox__inner {
          width: 24px;
          height: 24px;
      }
}

::v-deep .el-checkbox__input.is-checked + .el-checkbox__label{
    color: $grey;

  }

  .el-checkbox {
  margin-left: 12px;
  padding-top: 8px;
  &:first-child {
    padding-top: 8px;
  }
}

</style>