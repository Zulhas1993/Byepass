import React, { useState, useEffect } from 'react';
import styles from './ButtonSection.module.css'; // Import CSS modules

function ButtonSection() {
  // State to manage form data
  const [formData, setFormData] = useState({
    subscribe: {
      action: 'https://devwww.mopita.com/cp/regist',
      inputs: [
        { name: 'ci', value: 'R000002379' },
        { name: 'act', value: 'reg' },
        { name: 'nl', value: 'https://stgbyepass.mopita.com/member' },
        { name: 'cl', value: 'https://stgbyepass.mopita.com/top' },
        { name: 'fl', value: 'https://stgbyepass.mopita.com/top' },
      ],
    },
    login: {
      action: 'https://devwww.mopita.com/cp/login',
      inputs: [
        { name: 'nl', value: 'https://stgbyepass.mopita.com/top' },
      ],
    },
  });

  // State to manage price
  const [price, setPrice] = useState(null);
  const defaultPrice = 275; // Default price value

  // Fetch price from an API or external source
  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://api.example.com/price')
      .then(response => response.json())
      .then(data => {
        // If data.price is valid, use it, otherwise set defaultPrice
        if (data.price && typeof data.price === 'number') {
          setPrice(data.price);
        } else {
          setPrice(defaultPrice);
        }
      })
      .catch(error => {
        console.error('Error fetching price:', error);
        // Set default price in case of error
        setPrice(defaultPrice);
      });
  }, []);

  // General handler for form submissions
  const handleSubmit = (event, formType) => {
    event.preventDefault();
    const form = event.target;
    const action = formData[formType].action;
    const inputs = formData[formType].inputs;

    // Create and submit form dynamically
    const newForm = document.createElement('form');
    newForm.action = action;
    newForm.method = 'post';

    inputs.forEach(input => {
      const newInput = document.createElement('input');
      newInput.type = 'hidden';
      newInput.name = input.name;
      newInput.value = input.value;
      newForm.appendChild(newInput);
    });

    document.body.appendChild(newForm);
    newForm.submit();
    document.body.removeChild(newForm);
  };

  return (
    <div className={styles.buttonSection}>
      <div className={styles.background}>
        <div className={styles.contentWrapper}>
          <div className={styles.title}>ByePassの購入　またはmopitaへのログイン</div>
          <div className={styles.description}>
            ご利用をご希望の方は、下記の「月額利用登録（入会）　月額{price ? `${price}円（税込）` : `${defaultPrice}円（税込）`}」より課金登録
            (入会) を行ってください。
          </div>
          <div className={styles.subDescription}>
            すでにByePassを購入済みの方は、下記の「mopitaにログイン」よりログインを行ってください。
          </div>
          <div className={styles.infoSection}>
            <div className={styles.sectionTitle}>ご利用登録に際して</div>
            <div className={styles.sectionSubtitle}>お支払方法</div>
            <div className={styles.paymentOptions}>
              <div className={styles.paymentMethods}>
                クレジットカード決済、d払い、auかんたん決済、ソフトバンクまとめて支払い、楽天ペイ
              </div>
              <div className={styles.paymentDetails}>
                <div className={styles.paymentColumn}>
                  <div className={styles.paymentInfo}>
                    <div className={styles.paymentMethod}>
                      mopita IDに登録した支払方法により異なります。
                    </div>
                    <div className={styles.paymentStart}>
                      月額利用登録完了後、直ちにご利用を開始いただけます。
                    </div>
                  </div>
                </div>
                <div className={styles.paymentColumn2}>
                  <div className={styles.paymentTiming}>
                    <div className={styles.timingTitle}>お支払時期</div>
                    <div className={styles.timingSubtitle}>サービス提供開始時期</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.notesTitle}>ご注意事項</div>
            <div className={styles.notes}>
              ・ご利用料金は月単位で発生します。月の途中でのご登録またはご解約となった場合も1か月分のご利用料金をお支払いいただきます。
              <br />
              ・ご解約時点でサービスのご利用は停止されます。
              <br />
              ・お客様事由での返品／キャンセルには対応致しかねます。
            </div>
          </div>
          <button
            className={styles.formButton}
            onClick={(e) => handleSubmit(e, 'subscribe')}
          >
            月額利用登録（入会）　月額{price ? `${price}円（税込）` : `${defaultPrice}円（税込）`}
          </button>
          <button
            className={styles.formButton2}
            onClick={(e) => handleSubmit(e, 'login')}
          >
            mopitaにログイン
          </button>
          <div className={styles.licenseInfo}>1ライセンス（1ユーザーで利用可能）</div>
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
