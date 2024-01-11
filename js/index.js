const { createApp, ref, reactive } = Vue
const { createVuetify, } = Vuetify

const vuetify = createVuetify()

createApp({
  setup() {
    const theme = ref('dark')
    const drawer = ref(true)
    const rail = ref(true)
    const viewPage = ref('')
    const navItems = reactive([
      { icon: 'mdi-home', text: 'Home' , src: './view/home.html'},
      { icon: 'mdi-clipboard-text', text: 'Menu'  , src: './view/menu.html'},
      { icon: 'mdi-shopping-outline', text: 'Shop'  , src: './view/shop.html'},
      { icon: 'mdi-information', text: 'About'  , src: './view/about.html'},
    ])

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    const router = value =>{
      viewPage.value = value
    }

    return {
      theme,
      drawer,
      rail,
      navItems,
      viewPage,
      toggleTheme,
      router
    }
  }
}).use(vuetify).mount('#app')