import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import GeneralFormPage from './pages/GeneralForm.vue';
import JobsFormPage from './pages/JobsForm.vue';
import VehiclesFormPage from './pages/VehiclesForm.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/General/',
    component: GeneralFormPage,
  },
  {
    path: '/Jobs/',
    component: JobsFormPage,
  },
  {
    path: '/Vehicles/',
    component: VehiclesFormPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
