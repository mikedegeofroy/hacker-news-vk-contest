import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export enum Routes {
  Home = 'home',
  Article = 'article/:id',
  User = 'user',
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(Routes.Home, '/', []),
      createPanel(Routes.Article, `/${Routes.Article}`, [], ['id'] as const),
      createPanel(Routes.User, `/${Routes.User}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
