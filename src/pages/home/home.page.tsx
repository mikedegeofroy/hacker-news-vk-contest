import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Group,
  Cell,
  Avatar,
  NavIdProps,
  CardGrid,
  useAdaptivityWithJSMediaQueries,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { Routes } from '@/routes';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Article } from '@/components/article/article';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/shared/article.api';

export interface IHomePage extends NavIdProps {
  id: Routes;
  fetchedUser?: UserInfo;
}

export const HomePage: FC<IHomePage> = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const articles = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    // refetchInterval: 10000,
  });

  return (
    <Panel id={id}>
      {!isDesktop && (
        <PanelHeader
          delimiter={'none'}
          after={
            <Avatar
              onClick={() => routeNavigator.push('/user')}
              size={36}
              src={fetchedUser?.photo_200}
            />
          }
        >
          HackerNews
        </PanelHeader>
      )}
      {fetchedUser && (
        <Group
          header={
            <Header mode='secondary'>User Data Fetched with VK Bridge</Header>
          }
        >
          <Cell
            before={photo_200 && <Avatar src={photo_200} />}
            subtitle={city?.title}
          >
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}

      <Group>
        <CardGrid size='l'>
          {articles.data?.slice(0, 100).map((article, index) => {
            return (
              <Article key={index} article_id={article.toString()}></Article>
            );
          })}
        </CardGrid>
      </Group>
    </Panel>
  );
};
