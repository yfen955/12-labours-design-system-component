import './demo-styles.scss';

export default {
  title: 'Components/Radio Buttons',
  includeStories: []
}

export const radio = () => ({
    data() {
      return {
        radio: 3,
        radio_d:'selected and disabled'
      }
    },
    template: `
      <div class="radio-group">
        <el-radio-group v-model="radio">
          <el-radio :label="3">Option A</el-radio>
          <br />
          <el-radio :label="6">Option B</el-radio>
          <br />
          <el-radio :label="9">Option C</el-radio>
        </el-radio-group>
     
      <div class="radio-disabled">
        <el-radio disabled v-model="radio_d" label="disabled"></el-radio>
        <el-radio disabled v-model="radio_d" label="selected and disabled"></el-radio>
      </div>
  `
  })


/* Radio button style group */

export const RadioToggle= () => ({
  data() {
    return {
      radio1: 'Option 2'
    }
  },
  template: `
  <div>
    <div class="body2 title">
      Toggle Title
    </div> 
      <el-radio-group v-model="radio1">
        <el-radio-button label="Option 1"></el-radio-button>
        <el-radio-button label="Option 2"></el-radio-button>
        <el-radio-button label="Option 3"></el-radio-button>
      </el-radio-group>
  </div>
  `
})

