<template>
  <div id="app">
    <TwelveLaboursHeader :auth="auth" :headerLinks="headerLinks" linkComponent="router-link" :currentPath="$route.name" @isSignOut="signOut"/>
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
        <tab-nav
          :tabs="tabs"
          :active-tab="currentTab"
          v-on:tabClick="changeTab"
        />
      </div>
      <pagination :total-count="totalCount" :page-size="pageSize" @select-page="onPaginationChange" />
      <!--<pagination-menu 
        :page-size="pageSize"
        @update-page-size="updatePageSize"
      />-->
      <div style="width:500px;padding:40px">
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
        <carousel-card :cards="cards_list" @model="viewModel" @thumbnail="viewThumbnail" />
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
      cards_list: [
        {
          type: "Thumbnail",
          imageUrl: "imageUrl1",
          filename: "filename1",
          id: "id1",
          imageDownload: "imageDownload1",
        },
        {
          type: "Scaffold",
          imageUrl: "imageUrl2",
          filename: "filename2",
          id: "id2",
          imageDownload: "",
        },
        {
          type: "Flatmap",
          imageUrl: "",
          filename: "filename3",
          id: "id3",
          imageDownload: "",
        },
        {
          type: "Plot",
          imageUrl: "imageUrl4",
          filename: "filename4",
          id: "id4",
          imageDownload: "",
        },
      ],
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
    viewModel(model, uuid) {
      let route = this.$router.resolve({
        name: `data-maps-${model.toLowerCase()}-id`,
        params: { id: uuid },
        query: { access: this.$route.query.access }
      });
      window.open(route.href);
    },
    viewThumbnail(url) {
      window.open(url);
    },
    signOut(bool) {
      if (bool) {
        console.log(bool);
      }
    },
    changeTab: function(val) {
      this.$router.push({
        path: this.$route.path,
        query: { datasetTab: val },
      });
    },
  },
  computed: {
    currentTab: function() {
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
</style>
