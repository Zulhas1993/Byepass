import React from 'react';
import styles from './FeatureSection.module.css';

const features = [
  {
    id: 1,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7159b123e8b63d97bc8e5b0e2425435df6b2adebc06a4dbf791acb8ede5d6bc?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "パスワードを安全に保存",
    description: "暗号化を使用して、パスワードを安全に保存。入力などの際に必要に応じて呼び出せます。"
  },
  {
    id: 2,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/05fb0c77b8e2a13e1f0b6b2e6eadf91e1861da036dc298accf70e85ca81e018b?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "カード情報を暗号化",
    description: "クレジットカードデータも暗号化します。暗号化すると、第三者がアクセスしたり、保存することができません。"
  },
  {
    id: 3,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b70f8d211519141c9d4a41710669f6b1fe07dcc3cb914e6db97e1adced67e81?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "オートフィル機能",
    description: "ByePassにIDやパスワードを記憶させると、次回から入力する手間がなくなります。"
  },
  {
    id: 4,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/506dd792423c60b16a561ed85eb7240442ea34d13db30b137462449eafbbbe8b?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "漏洩したパスワードの確認",
    description: "ハッカーが共有するリスト「ダークウェブ」にあなたのパスワードがあるかどうかを確認し、存在した場合はByePass内でパスワードを変更します。"
  },
  {
    id: 5,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0a15c39d88b0400cea43df1b602aec8027cac03d503f04e1fd490e0f0c2cdfc?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "強力なパスワードを提案",
    description: "あなたの情報をサイバー攻撃から守るために、セキュリティレベルの高いパスワードを自動的に提案します。"
  },
  {
    id: 6,
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/deaedf7c4b0d68bdcfee1102b6c677a1687ce64e93b682b1a608fb6880131a98?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888",
    title: "メモも安全に保管",
    description: "個人的なメモや銀行口座番号やPINなどの機密データも、端末上で暗号化し安全に保存できます。"
  }
];

const FeatureCard = ({ imgSrc, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <img loading="lazy" src={imgSrc} alt={title} className={styles.featureImage} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
      <p className={styles.featureIntro}>
        シンプルで安全な自動パスワード管理ですべてのデジタルデバイスでパスワード管理プロセスを簡素化します。
        AndroidやiOSでの使用はもちろんWindowsやMacでも利用が可能です。利用端末数に制限もありません。
      </p>
      <div className={styles.featureGrid}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
