<template>
  <div id="app">
    <TwelveLaboursHeader linkComponent="router-link" :currentPath="$route.name"/>
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <div class="content-body">
      <el-button>hi</el-button>
      <el-button disabled>Disabled</el-button>
      <el-button size="medium">hi medium</el-button>
      <a href="/">I am  default link</a><br/>
      <div style="display:flex">
        <div style="width:400px;">
          <multiline-text
          :max-length="maxLength"
          resize="vertical"
          placeholder-text="Enter your details"
          @text-change="multiChange"/>
        </div>
        <div>{{txtMulti}}</div>
      </div>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day">
      </el-date-picker>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <div style="padding: 2em;">
        <tab-nav
          :tabs="tabs"
          :active-tab="activeTab"
        />
      </div>
       <pagination
            :total-count="totalCount"
            :page-size="pageSize"          
            @select-page="onPaginationChange"
          />       
      <!--<pagination-menu 
        :page-size="pageSize"
        @update-page-size="updatePageSize"
      />-->
      <div style="width:500px;padding:40px">
      <el-collapse accordion>
          <el-collapse-item title="I am Item1">
            <span>Item1</span>
          </el-collapse-item>
          <el-collapse-item  title="I am Item2">
            <span>Item2</span>
          </el-collapse-item>
          <el-collapse-item  title="I am Item3">
            <span>Item3</span>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="tooltip">
        <tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
          <div slot="data">{{ dir }}<br/>THIS IS <a href="#">ALOT</a> OF TEXT</div>
          <el-button slot="item">{{ dir }}</el-button>
        </tooltip>
      </div>
      <el-row type="flex" justify="center">
        <el-select disabled
          v-model="selectVal"
          placeholder="Select2"
        >
          <el-option-group
            v-for="group in selectOpts"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-row>
    </div>
    <TwelveLaboursFooter/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      value1: '',
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: '',
      activeTab: 'past',
      tabs: [
        {
          label: 'Upcoming',
          name: 'upcoming'
        },
        {
          label: 'Past',
          name: 'past'
        }
      ],
      tooltipDirs: [
        'top-left',
        'top-center',
        'top-right',
        'left-top',
        'left-center',
        'left-bottom',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-top',
        'right-center',
        'right-bottom'
      ],
      selectVal: [],
      selectOpts: [
        {
          label: 'Group 1',
          options: [
            {
              value: 'Option1',
              label: 'Option 1'
            },
            {
              value: 'Option2',
              label: 'Option 2'
            },
          ]
        },
        {
          label: 'Group 2',
          options: [
            {
              value: 'Option3',
              label: 'Option 3'
            },
            {
              value: 'Option4',
              label: 'Option 4'
            },
          ]
        },
      ], 
      pageTitle: 'News',
      breadcrumb: [
        {
          to: {
            name: 'index'
          },
          label: 'HOME'
        },
         {
          to: {
            name: 'index'
          },
          label: 'HOMBig titleE HOMBig titleE HOMBig titleE'
        }
      ],
      pageSize: 5,
      totalCount:50,
      currentPage:3,
      maxLength: 100,
      minLength:7,
      txtMulti:''
    }
  },
  methods: {
      onPaginationChange: function(page) {
      this.currentPage=page
    },
    updatePageSize: function(limit) {
      this.pageSize = limit === 'View All' ?  100 : limit
      this.pageCount = limit === 'View All' ?  100 : limit
    },
    multiChange:function(input){
      this.txtMulti=input
    }
  }
}
</script>

<style lang="scss">

.content-body {
  padding-top: 1em;
}
.radio-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-top: 10px;
}
.tooltip {
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
