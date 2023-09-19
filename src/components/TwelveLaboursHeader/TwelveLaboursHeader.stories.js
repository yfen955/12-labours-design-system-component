import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-vue-router';


const defaultProps = () => ({
  auth: {
    loggedIn: false,
    user: null,
  },
  headerLinks: [
    {
      title: "data-and-models",
      displayTitle: "Data & Models",
      href: "/data?type=dataset"
    },
    {
      title: "resources",
      displayTitle: "Resources",
      href: "/resources"
    },
    {
      title: "about",
      displayTitle: "About",
      href: `/about`
    },
    {
      title: "news-and-events",
      displayTitle: "News & Events",
      href: "/news-and-events"
    },
    {
      title: "search",
      displayTitle: "Search",
      href: "/search"
    }
  ],
  currentPath: { default: "/" },
})

export default {
  title: 'Large Components/12 Labours Header',
  decorators: [withKnobs, StoryRouter()],
  includeStories: []
}

export const Primary = () => ({
  props: defaultProps(),
  template: `
    <div>
      <TwelveLaboursHeader 
        :auth="$auth" 
        :headerLinks="headerLinks"
        linkComponent="router-link"
        :currentPath="$route.name"
      />
    </div>
  `
})

