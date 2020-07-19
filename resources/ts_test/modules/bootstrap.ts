// bootstrap
import $ from 'jquery';
import BootStrap from 'bootstrap';

// Font Awesome
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-solid';
import solid from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(regular);
fontawesome.library.add(solid);
fontawesome.library.add(brands);

// axios
import Axios, { AxiosStatic } from 'axios';

declare global {
  interface Window {
    axios: AxiosStatic;
  }
  interface Element {
    content: string;
  }
}

export default function bootstrap() {
  window.axios = Axios;
  window.Bootstrap = BootStrap;

  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  let token = document.head.querySelector('meta[name="csrf-token"]');

  if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
  } else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
  }
}
