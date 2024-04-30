import { useState, useEffect } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home } from '@/panels/home';
import { DEFAULT_VIEW_PANELS } from '@/routes';
import { Article } from './panels/article';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={false}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id='home' fetchedUser={fetchedUser} />
          <Article
            id='article'
            article={{
              content_id: 0,
              author: 'mikedegeofroy',
              title:
                'Radicle is an open source, peer-to-peer code collaboration stack built on Git',
              score: 1878,
              datetime: new Date(),
              new: false,
            }}
          />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
