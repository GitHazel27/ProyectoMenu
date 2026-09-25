import { createRouter, createWebHistory } from 'vue-router';
import fatherComponent from '../components/fatherComponent.vue';
import ObjectLiterals from '../components/ObjectLiterals.vue';
import About from '../components/About.vue';
import ArrayComponent from '../components/ArrayComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import constantsComponent from '../components/constantsComponent.vue';
import usovbind from '../components/usovbind.vue';
import arreglomovie from '../components/arreglomovie.vue';
import importacionComponent from '../components/importacionComponent.vue';
import ExampleComponent from '../components/ExampleComponen.vue';
import ArregloSimple from '../components/ArregloSimpleComponent.vue';

const routes = [
  { path: '/example', name: 'Example', component: ExampleComponent },
  { path: '/about', name: 'About', component: About },
  { path: '/arreglosimple', name: 'ArregloSimple', component: ArregloSimple },
  { path: '/arraycomponent', name: 'arrayComponent', component: ArrayComponent },
  { path: '/tipoPadre', name: 'tipoPadre', component: fatherComponent },
  { path: '/constants', name: 'constants', component: constantsComponent },
  { path: '/objectLiterals', name: 'objectLiterals', component: ObjectLiterals },
  { path: '/headerComponent', name: 'headerComponent', component: HeaderComponent },
  { path: '/usovbind', name: 'usovbind', component: usovbind },
  { path: '/arreglomovie', name: 'arreglomovie', component: arreglomovie },
  { path: '/importacion', name: 'importacion', component: importacionComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;