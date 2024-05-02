import { Routes } from '@/routes';
import { getArticle } from '@/shared/article.api';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Title,
} from '@vkontakte/vkui';
import { FC } from 'react';

export interface IArticlePage extends NavIdProps {
  id: Routes;
}

export const ArticlePage: FC<IArticlePage> = ({ id }) => {
  const router = useRouteNavigator();

  const params = useParams<'id'>();
  const article_id = params?.id ?? '';

  const article = useQuery({
    queryKey: ['todos', article_id],
    queryFn: () => getArticle(article_id),
    refetchInterval: 60000,
  });

  console.log(article.data);

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => router.back()}></PanelHeaderBack>
        }
        delimiter='none'
      >
        Article
      </PanelHeader>
      <Title level='1'>{article.data?.title}</Title>
      {new Date((article.data?.time ?? 0) * 1000).toDateString()}
      {article.data?.score}
      {article.data?.by}
    </Panel>
  );
};
