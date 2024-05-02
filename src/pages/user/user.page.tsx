import { Routes } from '@/routes';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { FC } from 'react';

export interface IUserPage extends NavIdProps {
  id: Routes;
}

export const UserPage: FC<IUserPage> = ({ id }) => {
  const router = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => router.back()}></PanelHeaderBack>
        }
      >
        User
      </PanelHeader>
    </Panel>
  );
};
