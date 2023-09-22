import Dashboard from "@/components/Dashboard/src/Dashboard.vue";

export default {
  title: "Components/Dashboard",
  includeStories: [],
};

export const WithProcess = () => {
  return {
    components: { Dashboard },
    data() {
      return {
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
    template: `
      <div>
        <dashboard :user="user_data" :table_data="table_data" :columns_list="columns_list" :default_columns="default_columns" />
      </div>
    `,
  };
};
