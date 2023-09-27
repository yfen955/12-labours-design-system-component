<template>
  <div id="app">
    <TwelveLaboursHeader :auth="auth" :headerLinks="headerLinks" linkComponent="router-link" :currentPath="$route.name"
      @isSignOut="signOut" />
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" linkComponent="router-link" />
    <div class="content-body">
      <el-form label-position="top">
        <el-form-item label="What area would you like to know more">
          <el-select v-model="value" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <div class="error">error message</div>
        </el-form-item>
        <el-form-item label="Input test">
          <el-input v-model="value" placeholder="Input"> </el-input>
          <div class="error">error message</div>
        </el-form-item>
        <el-form-item label="Multi test">
          <multiline-text placeholder-text="Enter your details" :max-length="maxLength" @text-change="multiChange" />
          <div class="error">error message</div>
        </el-form-item>
      </el-form>

      <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>

      <div style="padding: 2em;">
        <tab-nav :tabs="tabs" :active-tab="currentTab" v-on:tabClick="changeTab" />
      </div>
      <pagination :total-count="totalCount" :page-size="pageSize" @select-page="onPaginationChange" />
      <!--<pagination-menu 
        :page-size="pageSize"
        @update-page-size="updatePageSize"
      />-->
      <div>
        <el-collapse accordion>
          <el-collapse-item title="I am Item1">
            <span>Item1</span>
          </el-collapse-item>
          <el-collapse-item title="I am Item2">
            <span>Item2</span>
          </el-collapse-item>
          <el-collapse-item title="I am Item3">
            <span>Item3</span>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="tooltip">
        <tooltip v-for="dir in tooltipDirs" :key="dir" :placement="dir">
          <div slot="data">
            {{ dir }}<br />THIS IS <a href="#">ALOT</a> OF TEXT
          </div>
          <el-button slot="item">{{ dir }}</el-button>
        </tooltip>
      </div>
      <el-row type="flex" justify="center">
        <el-select disabled v-model="selectVal" placeholder="Select2">
          <el-option-group v-for="group in selectOpts" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-row>
      <div>
        <carousel-card :cards="cards_list" :all_models="all_models" @cardInfo="viewContent" />
      </div>
      <div>
        <el-button @click="changeUserType">Change User Type</el-button>
        <dashboard :user="user_data" :table_data="table_data" :columns_list="columns_list" :default_columns="default_columns" v-on:open-page="showPage" />
      </div>
    </div>
    <TwelveLaboursFooter linkComponent="router-link"> </TwelveLaboursFooter>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      auth: {
        loggedIn: false,
        user: null,
      },
      headerLinks: [
        {
          title: "data-and-models",
          displayTitle: "Data & Models",
          href: "/data?type=dataset",
        },
        {
          title: "resources",
          displayTitle: "Resources",
          href: "/resources",
        },
        {
          title: "about",
          displayTitle: "About",
          href: "/about",
        },
        {
          title: "news-and-events",
          displayTitle: "News & Events",
          href: "/news-and-events",
        },
      ],
      value1: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
      // activeTab: "past",
      tabs: [
        {
          label: "Upcoming",
          name: "upcoming",
        },
        {
          label: "Past",
          name: "past",
        },
      ],
      tooltipDirs: [
        "top-left",
        "top-center",
        "top-right",
        "left-top",
        "left-center",
        "left-bottom",
        "bottom-left",
        "bottom-center",
        "bottom-right",
        "right-top",
        "right-center",
        "right-bottom",
      ],
      selectVal: [],
      selectOpts: [
        {
          label: "Group 1",
          options: [
            {
              value: "Option1",
              label: "Option 1",
            },
            {
              value: "Option2",
              label: "Option 2",
            },
          ],
        },
        {
          label: "Group 2",
          options: [
            {
              value: "Option3",
              label: "Option 3",
            },
            {
              value: "Option4",
              label: "Option 4",
            },
          ],
        },
      ],
      pageTitle: "News",
      breadcrumb: [
        {
          to: {
            name: "index",
          },
          label: "HOME",
        },
        {
          to: {
            name: "index",
          },
          label: "HOMBig titleE HOMBig titleE HOMBig titleE",
        },
      ],
      pageSize: 5,
      totalCount: 50,
      currentPage: 3,
      maxLength: 100,
      minLength: 7,
      txtMulti: "",
      all_models: new Set(['Thumbnail', 'Scaffold', 'Flatmap', 'Plot']),
      cards_list: [
        {
          type: "Thumbnail",
          url: "imageUrl1",
          filename: "filename1",
          id: "id1",
        },
        {
          type: "Scaffold",
          url: "imageUrl2",
          filename: "filename2",
          id: "id2",
        },
        {
          type: "Flatmap",
          imaurlgeUrl: "",
          filename: "Pig",
          id: "Pig",
        },
        {
          type: "Plot",
          url: "imageUrl4",
          filename: "filename4",
          id: "id4",
        },
      ],
      user_data: { type_name: "Researcher" },
      table_data: [
        {
          workflow: 'Cardiac',
          subject: 'Patient 1',
          progress: 'Step 4/5',
          time: '1.5 mins',
          age: '40',
          height: '170',
          logs: 'Link'
        },
        {
          workflow: 'Shoulder',
          subject: 'Patient 1',
          progress: 'Finished',
          time: '60 mins',
          age: '50',
          height: '160',
          logs: 'Link'
        },
        {
          workflow: 'Shoulder',
          subject: 'Patient 2',
          progress: 'Step 2/3',
          time: '150 mins',
          age: '60',
          height: '150',
          logs: 'Link'
        },
      ],
      columns_list: ['Workflow', 'Subject ID', 'Progress', 'Time', 'Age', 'Height', 'Logs', 'Actions'],
      default_columns: ['Workflow', 'Subject ID', 'Progress', 'Actions'],
    };
  },
  methods: {
    onPaginationChange: function (page) {
      this.currentPage = page;
    },
    updatePageSize: function (limit) {
      this.pageSize = limit === "View All" ? 100 : limit;
      this.pageCount = limit === "View All" ? 100 : limit;
    },
    multiChange: function (input) {
      this.txtMulti = input;
    },
    viewContent(type, url, uuid) {
      if (type === "Thumbnail") {
        window.open(url);
      } else if (type === "Scaffold" || type === "Plot") {
        const route = this.$router.resolve({
          name: `data-maps-${type.toLowerCase()}-id`,
          params: { id: uuid },
          query: { access: this.$route.query.access },
        });
        window.open(route.href);
      }
    },
    signOut(bool) {
      if (bool) {
        console.log(bool);
      }
    },
    changeTab: function (val) {
      this.$router.push({
        path: this.$route.path,
        query: { datasetTab: val },
      });
    },
    changeUserType: function() {
      if (this.user_data.type_name === "Researcher") {
        this.user_data.type_name = "Clinician";
        this.columns_list = ['Workflow', 'Subject ID', 'Progress', 'Time', 'Age', 'Height', 'Actions'];
      }
      else {
        this.user_data.type_name = "Researcher";
        this.columns_list = ['Workflow', 'Subject ID', 'Progress', 'Time', 'Age', 'Height', 'Logs', 'Actions'];
      }
    },
    showPage: function(type, val) {
      this.$message.success(`${type}, ${val}`, { duration: 3000, position: 'bottom-right' })
    }
  },
  computed: {
    currentTab: function () {
      return this.$route.query.datasetTab;
    },
  },
};
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

.footer-logo {
  height: 12.5rem;
  width: 14.56rem;
  white-space: nowrap;
}

.el-collapse {
  min-width: 250px;
  padding: 40px
}
</style>
