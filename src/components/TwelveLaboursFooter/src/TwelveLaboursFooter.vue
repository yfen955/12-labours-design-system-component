<template>
    <div class="footer">
        <div class="footer-container">
          <div class="logo-wrapper">
            <div class="logo">
            <component
                :is="linkComponent"
                :to="{ name: 'index' }"
              >
              <!-- Provide a way to slot in the logo -->
                <slot name="logo">
                  <twelve-labours-logo type="black"/>
                </slot>
              </component>
            </div>
          </div>
          <div class="navigation">
             <div class="navigation__links">
              <ul>
                <li v-for="link in footerLinks" :key="link.href">
                   <a :href="link.href">
                    {{ link.displayTitle.toUpperCase() }}
                  </a>
                </li>
              </ul>
              </div>
             <div class="navigation__social">
                <a :href="twitterLink" target="_blank">
                  <svgicon icon="social/twitterFull"/>
                </a>
                <a :href="youtubeLink" target="_blank">
                  <svgicon icon="social/youtubeFull"/>
                </a>
                 <a :href="facebookLink" target="_blank">
                  <svgicon icon="social/facebook"/>
                </a>
              </div>
          </div>
        </div>
    </div>
</template>


/****************    CODE   ****************/

<script>
import TwelveLaboursLogo from "../../TwelveLaboursLogo/TwelveLaboursLogo.vue";

export default {
  name: "TwelveLaboursFooter"
  ,
  props: {
    linkComponent: {
      type: String,
      default: "nuxt-link"
    },
    twitterLink: {
      type: String,
      default: "https://twitter.com/sparc_science"
    },
    youtubeLink: {
      type: String,
      default: "https://www.youtube.com/results?search_query=sparc+nih"
    },
    facebookLink: {
      type: String,
      default: "https://www.facebook.com/12-labours"
    },
    footerLinks: {
      type: Array,
      default: function() { return [
          {
            title: "terms-of-service",
            displayTitle: "Terms of Service",
            href: "/"
          },
          {
            title: "privacy-policy",
            displayTitle: "Privacy Policy",
            href: "/"
          },
          {
            title: "site-feedback",
            displayTitle: "Site Feedback",
            href: `/`
          },
          {
            title: "contact",
            displayTitle: "Contact",
            href: "/"
          }
        ]
      }
    },
  
    currentPath: {
      type: String,
      default: "/"
    }
  },
  components: {
    TwelveLaboursLogo
  },
  methods: {
    /**
     * Sets a link to active based on current page
     * @param {String} query
     */
    activeLink: function(query) {
      if (this.currentPath === query) {
        return true;
      } else {
        return false;
      }
    },
  }

};
</script>


/****************    STYLES   ****************/

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 1023px) {
    display:none;
  }
}

.footer-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height:222px;
  background-color: $grey;
  padding:0px 60px;
  justify-content:space-between;   
}

.logo-wrapper{
  margin:11px 0px;
}

.logo
{
  height: 200px;   
  width: 233px;  
  white-space: nowrap;
}


.navigation{
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__links{
    margin-top:40px;
    margin-bottom:0px;
  ul {
    list-style: none;
    text-align:right; 
    margin:0px;
    padding:0px;
    li {
      margin-bottom:12px;
      a {
        text-decoration: none  !important;
        font: normal normal 600 16px/18px $font-family;
        color: $cochlear !important; 
        &.active,
        &:hover,
        &:focus {
          color: $cochlear;
        }
      }
    }
  }
  }
}  

.navigation__social{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top:0px;
    margin-bottom:40px;
    
}

.svg-fill{
  color:$grey;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  height:26px;
  width:26px;
  padding:4px;
  margin-left:12px;
  border-radius:2px;
}
</style>
