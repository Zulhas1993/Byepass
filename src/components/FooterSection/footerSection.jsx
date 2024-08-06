import React from 'react';
import styles from './footerSection.module.css'; // Import CSS module

function FooterComponent() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.linksRow1}>
            <a href="https://stgbyepass.mopita.com/contact">お問い合わせ</a>｜<a href="https://stgbyepass.mopita.com/unsubscribe">会員解除</a>
          </div>
          <div className={styles.linksRow2}>
            <a href="https://devwww.mopita.com/">mopita</a>｜<a href="https://stgbyepass.mopita.com/sysreq">動作環境</a>｜<a href="https://stgbyepass.mopita.com/features">機能一覧</a>
          </div>
          <div className={styles.linksRow3}>
            <a href="https://stgbyepass.mopita.com/terms">利用規約</a>｜<a href="http://www.mti.co.jp/privacy">当社の個人情報保護方針</a>
          </div>
          <div className={styles.linksRow4}>
            <a href="/privacy">本アプリのプライバシーポリシー</a>｜<a href="https://stgbyepass.mopita.com/legal">特定商取引法の表記</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 株式会社エムティーアイ</p>
      </div>
    </div>
  );
}

export default FooterComponent;
