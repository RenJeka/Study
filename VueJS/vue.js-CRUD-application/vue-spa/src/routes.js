import Users from './components/users/Users.vue';
import Edit from './components/edit/Edit.vue';

export const routes = [
    { path: '/users', component: Users },
    { path: '/users/edit', component: Edit}
  ];