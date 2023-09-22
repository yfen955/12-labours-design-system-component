import Dashboard from "./src/Dashboard";

/* istanbul ignore next */
Dashboard.install = function(Vue) {
  Vue.component(Dashboard.name, Dashboard);
};

export default Dashboard;