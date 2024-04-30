import { FC } from 'react';
import {
  Panel,
  Header,
  Group,
  Cell,
  Avatar,
  NavIdProps,
  CardGrid,
  Button,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { ArticleCard } from '@/entities/articles/ui/article';

import styles from './home.module.css';
import { Banner } from '@/entities/banner/ui/banner';
import { IArticleProps } from '@/entities/articles/model/types';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const articles: IArticleProps[] = [
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: true,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: true,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
];

export interface IHomeProps extends NavIdProps {
  id: string;
  fetchedUser?: UserInfo;
}

export const Home: FC<IHomeProps> = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const router = useRouteNavigator();

  return (
    <Panel id={id}>
      <div style={{ padding: '20px' }}>
        <h1 className={styles['title']}>Hello 👋</h1>
      </div>
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
      <Banner />
      <div style={{ padding: '12px', display: 'flex', gap: 10 }}>
        <Button
          style={{ paddingRight: '20px', paddingLeft: '20px' }}
          appearance='overlay'
          size='m'
        >
          Type1
        </Button>
        <Button
          style={{ paddingRight: '20px', paddingLeft: '20px' }}
          appearance='overlay'
          size='m'
        >
          Type1
        </Button>
        <Button
          style={{ paddingRight: '20px', paddingLeft: '20px' }}
          appearance='overlay'
          size='m'
        >
          Type1
        </Button>
      </div>
      <Group>
        <CardGrid size='l'>
          {articles.map((article, key) => (
            <ArticleCard
              {...article}
              onClick={() => router.push('/article')}
              key={key}
            />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
