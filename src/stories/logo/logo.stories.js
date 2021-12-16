import TwelveLaboursLogo from '@/components/TwelveLaboursLogo/src/TwelveLaboursLogo.vue'
import './demo-styles.scss';

export default {
  title: 'Components/Logo',
  includeStories: []
}

export const Logo = () => ({
  components: { TwelveLaboursLogo },
  template: `
    <div class="logo-demo-styles">
      <div class="bx--grid">
        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-primary">
              <twelve-labours-logo type="primary" />
            </div>
          </div>
        </div>

        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-white">
              <twelve-labours-logo type="white" />
            </div>
          </div>
          <div class="bx--col">
            <div class="logo-black">
              <twelve-labours-logo type="black" />
            </div>
          </div>
        </div>

        <div class="bx--row">
          <div class="bx--col">
            <div class="logo-usage-wrap">
              <div class="logo-1 demo-logo-usage cross">
                <twelve-labours-logo class="logo" type="primary" />
              </div>
              <div class="logo-2 demo-logo-usage cross">
                <twelve-labours-logo class="logo" type="primary" />
              </div>
              <div class="logo-3 demo-logo-usage">
                <twelve-labours-logo class="logo" type="primary" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  `
})
export const Secondary = () => ({
  components: { TwelveLaboursLogo },
  template: `
    <div class="logo-demo-styles">
      <div class="bx--grid">
        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-primary">
              <twelve-labours-logo type="primary" :secondary="true" />
            </div>
          </div>
        </div>

        <div class="bx--row mb-32">
          <div class="bx--col">
            <div class="logo-white">
              <twelve-labours-logo type="white" :secondary="true" />
            </div>
          </div>
          <div class="bx--col">
            <div class="logo-black">
              <twelve-labours-logo type="black" :secondary="true" />
            </div>
          </div>
        </div>

        <div class="bx--row">
          <div class="bx--col">
            <div class="logo-usage-wrap">
              <div class="logo-1 demo-logo-usage cross">
                <twelve-labours-logo class="logo" type="primary" :secondary="true" />
              </div>
              <div class="logo-2 demo-logo-usage cross">
                <twelve-labours-logo class="logo" type="primary" :secondary="true" />
              </div>
              <div class="logo-3 demo-logo-usage">
                <twelve-labours-logo class="logo" type="primary" :secondary="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
