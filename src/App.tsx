import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { HomePage } from '@/pages';
import { Routes } from '@/routes';
import { ArticlePage } from './pages/article/article.page';
import { UserPage } from './pages/user/user.page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  const { panel: activePanel = Routes.Home } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [, setPopout] = useState<ReactNode | null>(
    <ScreenSpinner size='large' />
  );

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SplitLayout>
        <SplitCol>
          <View activePanel={activePanel}>
            <HomePage id={Routes.Home} fetchedUser={fetchedUser} />
            <ArticlePage id={Routes.Article} />
            <UserPage id={Routes.User} />
          </View>
        </SplitCol>
      </SplitLayout>
    </QueryClientProvider>
  );
};
