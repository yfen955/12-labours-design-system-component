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
            href: "/terms-of-service"
          },
          {
            title: "privacy-policy",
            displayTitle: "Privacy Policy",
            href: "/privacy"
          },
          {
            title: "site-feedback",
            displayTitle: "Site Feedback",
            href: "/site-feedback"
          },
          {
            title: "contact",
            displayTitle: "Contact",
            href: "/contact"
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
  height:13.88rem;
  background-color: $grey;
  padding:0 3.75rem;
  justify-content:space-between;   
}

.logo-wrapper{
  margin:0.75rem 0rem;
}

.logo
{
  height: 12.5rem;   
  width: 14.6rem;  
  white-space: nowrap;
}


.navigation{
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__links{
    margin-top:2.5rem;
    margin-bottom:0rem;
    ul {
      list-style: none;
      text-align:right; 
      margin:0rem;
      padding:0rem;
      li {
        margin-bottom:0.75rem;
        a {
          text-decoration: none  !important;
          font: normal normal 600 1rem/1.125rem $font-family;
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
    margin-top:0rem;
    margin-bottom:2.5rem;
    
}

.svg-fill{
  color:$grey;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  height:1.63rem;
  width:1.63rem;
  padding:0.25rem;
  margin-left:0.75rem;
  border-radius:2px;
}
</style>
