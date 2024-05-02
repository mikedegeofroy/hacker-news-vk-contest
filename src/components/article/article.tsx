import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Card, Title } from '@vkontakte/vkui';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../../shared/article.api';
import { FC } from 'react';

export interface ArticleProps {
  article_id: string;
}

export const Article: FC<ArticleProps> = ({ article_id }) => {
  const router = useRouteNavigator();

  const article = useQuery({
    queryKey: ['article', article_id],
    queryFn: () => getArticle(article_id),
  });

  return (
    <Card
      style={{ padding: '12px' }}
      onClick={() => router.push(`/article/${article_id}`)}
    >
      <Title level='2'>{article.data?.title}</Title>
    </Card>
  );
};
