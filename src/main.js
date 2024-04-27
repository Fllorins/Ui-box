import { createApp } from 'vue';
// import '/src/styles/global.scss';
import App from './App.vue';

import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
} from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add([
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
]);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
