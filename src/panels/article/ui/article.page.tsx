import { FC } from 'react';
import { IArticlePageProps } from '../model/types';
import { Card, CardGrid, Group, Panel } from '@vkontakte/vkui';

import styles from './article.module.css';
import { Icon20Bookmark, Icon20LogoVk } from '@vkontakte/icons';
import { ArticleCard } from '@/entities/articles/ui/article';
import { IArticleProps } from '@/entities/articles/model/types';
import bridge from '@vkontakte/vk-bridge';

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

export const Article: FC<IArticlePageProps> = ({ id, article }) => {
  const share = () => {
    bridge
      .send('VKWebAppShare', {
        link: 'https://vk.com/vkappsdev',
      })
      .then((data) => {
        if (data.result) {
          // Запись размещена
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });
  };

  return (
    <Panel id={id}>
      <div style={{ margin: '12px', marginTop: '48px' }}>
        <h1 className={styles['title']}>{article.title}</h1>
        <Card className={styles['header-card']}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span>{article.author}</span>
            <span>{article.datetime.toDateString()}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div onClick={share} className={styles['lower-icon']}>
              <Icon20LogoVk />
            </div>
            <div className={styles['lower-icon']}>
              <Icon20Bookmark />
            </div>
          </div>
        </Card>
      </div>
      <div
        style={{
          marginTop: '100px',
          position: 'relative',
          paddingTop: '50px',
        }}
      >
        <div
          style={{
            width: '140vw',
            height: '140vw',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: '100%',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            top: 0,
          }}
        />
        <Group>
          <CardGrid size='l'>
            {articles.map((article, key) => (
              <ArticleCard {...article} key={key} />
            ))}
          </CardGrid>
        </Group>
      </div>
    </Panel>
  );
};
