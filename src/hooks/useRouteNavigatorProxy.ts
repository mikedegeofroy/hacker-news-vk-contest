import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Page } from '@vkontakte/vk-mini-apps-router/dist/page-types/common';
import { NavigationOptions } from '@vkontakte/vk-mini-apps-router/dist/services/RouteNavigator.type';

export const useRouteNavigatorProxy = <T extends string>() => {
  const routeNavigator = useRouteNavigator();

  const filteredRouteNavigator = {
    ...routeNavigator,
    push(to: T | Page, options?: NavigationOptions) {
      routeNavigator.push(to, options);
    },
  };

  return filteredRouteNavigator;
};
