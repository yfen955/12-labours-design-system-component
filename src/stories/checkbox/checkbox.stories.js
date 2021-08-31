// import Checkbox from '@/components/Checkbox/src/Checkbox.vue'
import './demo-styles.scss';

export default {
    title: 'Components/Checkbox',
    includeStories: []
  }
  export const Checkbox= () =>  ({
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      }
    },
    template: `
    <div class="checkbox-group">
      <el-checkbox-group v-model="checkList">
          <el-checkbox label="Option A"></el-checkbox>
          <el-checkbox label="Option B"></el-checkbox>
          <el-checkbox label="Option C"></el-checkbox>
          <el-checkbox label="disabled" disabled></el-checkbox>
          <el-checkbox label="selected and disabled" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
  ` 
  })
  
  