// pages/en/privacy.js
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | THE ZZIM</title>
        <meta name="description" content="THE ZZIM Privacy Policy" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://thezzimvn.com/en/privacy" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">Chính Sách Bảo Mật</p>

          <section className="policy-section">
            <h2>1. Business Information</h2>
            <p><strong>Data Controller:</strong> The Zzim</p>
            <p><strong>Address:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, HCMC, Vietnam</p>
            <p><strong>Phone:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. Personal Information Collected</h2>
            <p>The Zzim collects the following information to provide reservation services:</p>
            <ul>
              <li><strong>Name:</strong> For reservation confirmation and contact</li>
              <li><strong>Phone number:</strong> For reservation confirmation and change notifications</li>
              <li><strong>Zalo:</strong> For contact and reservation confirmation</li>
              <li><strong>Reservation details:</strong> Number of guests, time, special requests</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Purpose of Information Use</h2>
            <p>Collected personal information is used only for the following purposes:</p>
            <ul>
              <li>Reservation confirmation and management</li>
              <li>Customer contact regarding reservations</li>
              <li>Handling customer requests and complaints</li>
              <li>Service quality improvement</li>
              <li>Sending promotional information (with customer consent)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Information Retention Period</h2>
            <p>Personal information related to reservations is retained for 12 months from the last reservation date. After that, it will be completely deleted in accordance with Vietnam's Personal Data Protection Law.</p>
          </section>

          <section className="policy-section">
            <h2>5. Third-Party Information Sharing</h2>
            <p>The Zzim does not provide personal information to third parties without customer consent, except in the following cases:</p>
            <ul>
              <li>Requests from competent government agencies as required by law</li>
              <li>Emergency situations to protect customer rights and safety</li>
              <li>Fulfillment of legal obligations under Vietnamese law</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Information Protection Measures</h2>
            <p>The Zzim applies the following technical and administrative measures to protect customer personal information:</p>
            <ul>
              <li>Encryption of sensitive information</li>
              <li>Restricting information access to authorized personnel only</li>
              <li>Regular security system inspection and updates</li>
              <li>Employee training on personal information protection</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Customer Rights</h2>
            <p>Under Vietnam's Personal Data Protection Law, customers have the following rights:</p>
            <ul>
              <li><strong>Right to know:</strong> Request information about data collection and use</li>
              <li><strong>Right to access:</strong> Request to view your personal information</li>
              <li><strong>Right to correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Right to deletion:</strong> Request deletion of personal information</li>
              <li><strong>Right to object:</strong> Object to personal information processing</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. How to Exercise Your Rights</h2>
            <p>Customers can exercise the above rights through the following contact channels:</p>
            <ul>
              <li><strong>Phone:</strong> +84 82 525 1004</li>
              <li><strong>Zalo:</strong> 0825 251 004</li>
              <li><strong>Address:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, HCMC</li>
            </ul>
            <p>We will respond within 15 business days of receiving your request.</p>
          </section>

          <section className="policy-section">
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies to improve user experience. You can disable cookies in your browser settings, but this may affect some website features.</p>
          </section>

          <section className="policy-section">
            <h2>10. Privacy Policy Changes</h2>
            <p>The Zzim may change this privacy policy. Changes will be posted on the website and take effect immediately upon posting.</p>
          </section>

          <section className="policy-section">
            <h2>11. Contact</h2>
            <p>If you have questions about this privacy policy, please contact:</p>
            <p><strong>The Zzim</strong><br />
            1B7 Đường Số 29, Khu Phố 5, Thủ Đức, HCMC<br />
            Phone: +84 82 525 1004<br />
            Zalo: 0825 251 004</p>
          </section>

          <p className="policy-update">Last updated: December 30, 2025</p>
        </div>
      </main>
    </>
  );
}