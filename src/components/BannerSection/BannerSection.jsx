"use client";
import React from "react";
import styles from "./BannerSection.module.css";
import Image from "next/image";


const PasswordManagerBanner = () => {
  const bannerImageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/cf4640b4e8a4d40d469ea4bab0014a5b933589eeab9b651f814e3abdf8d11051?apiKey=3194baa89623404684b086d15f5b5888&&apiKey=3194baa89623404684b086d15f5b5888";
  const mainDescription = `ByePassはプラットフォームに依存しない安全なパスワードマネージャです。
    <br />
    デジタルライフを簡単、かつ安全なものにし、オンラインで利用するクレジットカードの情報を保護することもできます。
    <br />
    ハッカーに盗み見される可能性のある危険なウェブブラウザ上での、
    パスワードやクレジットカード番号の入力や保存はもう必要ありません。`;
  const noticeUrl = "https://stgbyepass.mopita.com/anahamolinemo";
  const noticeText = "「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ";

  return (
    <section className={styles.BannerSection}>
      <img
        className={styles.BannerImage}
        loading="lazy"
        src={bannerImageUrl}
        alt="Password Manager Banner"
      />
      <p
        className={styles.MainDescription}
        dangerouslySetInnerHTML={{ __html: mainDescription }}
      ></p>
      <div className={styles.NoticeBox}>
        <p className="center-text">
          <a href={noticeUrl} className="orangered">{noticeText}</a>
        </p>
      </div>
    </section>
  );
};

export default PasswordManagerBanner;
