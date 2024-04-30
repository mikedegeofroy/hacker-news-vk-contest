import { classNames } from '@vkontakte/vkui';
import { FC } from 'react';

import styles from './banner.module.css';

export const Banner: FC = () => {
  return (
    <div className={styles['banner_container']}>
      <h1
        className={classNames(
          styles['header_banner'],
          styles['header_scroll_left']
        )}
      >
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
      </h1>
      <h1
        className={classNames(
          styles['header_banner'],
          styles['header_scroll_right']
        )}
      >
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
      </h1>
    </div>
  );
};
