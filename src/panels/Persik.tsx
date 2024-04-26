import { FC } from 'react';
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
} from '@vkontakte/vkui';
import PersikImage from '@/assets/persik.png';
import { Routes } from '@/routes';
import { useRouteNavigatorProxy } from '@/hooks/useRouteNavigatorProxy';

export interface PersikProps extends NavIdProps {
  id: Routes,
}

export const Persik: FC<PersikProps> = ({ id }) => {
  const routeNavigator = useRouteNavigatorProxy<Routes>();

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Persik
      </PanelHeader>
      <Placeholder>
        <img width={230} src={PersikImage} alt='Persik The Cat' />
      </Placeholder>
    </Panel>
  );
};
