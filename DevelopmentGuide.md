# 12 Labours design system components development guide

## Prerequisite

- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

# Development
## Project setup
```
yarn install
```


### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build-bundle
```
#### Note

The current implementation is not working with the latest version of Storybook.

### Component registration guide

[Link](https://vuejs.org/v2/guide/components-registration.html)

If any component name contains just one word, it should be prefixed with "TwelveLabours". e.g Buttons => TwelveLaboursButton

### Files structure

* config - Configuration files for storybook
* src - contains assests, components and stories .
    * assests - contains css stylesheets,images and icons used by the components
    * components - Each folder in the component folder contains the source codes used for one component.
    	* [ComponentName]
        	* index.js - used for component registrations
        	* [ComponentName].stores.js and [ComponentName].stores.mdx - They are generally located in the stories directory but they can be here for configuring more complicated components on storybook
        	* src
            	* [ComponentName].vue - Actual implementation of the component
            	* [ComponentName].spec.js - Unit testings script
    * stories - most of the configurations of components display on the storybook goes here. 
    	* [ComponentName]
    		* [ComponentName].stores.js and [ComponentName].stores.mdx - Layouts and configuration of each component display on the Storybook goes here.


## Working with Github

The main repository can be found [here](https://github.com/ABI-Software/12-labours-design-system-component).
All development should be done on a branch of a forked repository - the branch name should be meaningful. A pull request can be opened anytime against the main branch on the main repository but it should be marked as draft unless it is ready for review and merge.


## Unit tests

Utlises [Vue Test Utils](https://vue-test-utils.vuejs.org/) and [Jest](https://jestjs.io/).

### Running tests

Can be manually run with:
```
yarn test:unit
```
