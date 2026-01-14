// pages/en/terms.js
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | THE ZZIM</title>
        <meta name="description" content="THE ZZIM Terms of Use" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://thezzimvn.com/en/terms" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">Terms of Use</h1>
          <p className="policy-subtitle">Điều Khoản Sử Dụng</p>

          <section className="policy-section">
            <h2>1. Business Information</h2>
            <p><strong>Name:</strong> The Zzim</p>
            <p><strong>Address:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, HCMC, Vietnam</p>
            <p><strong>Phone:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. General Terms</h2>
            <p>By accessing and using The Zzim website, users are deemed to have read, understood, and agreed to these terms of use.</p>
          </section>

          <section className="policy-section">
            <h2>3. Reservations and Cancellations</h2>
            <ul>
              <li>Reservations can be made via Zalo or phone</li>
              <li>If not arrived within 30 minutes of the reservation time, the reservation will be automatically cancelled</li>
              <li>Please contact at least 2 hours in advance to cancel or change a reservation</li>
              <li>If you cancel a reservation without prior notice, future reservations may be refused</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Customer Rights and Obligations</h2>
            <h3>Customer Rights:</h3>
            <ul>
              <li>Receive complete information about services</li>
              <li>Personal information protection according to privacy policy</li>
              <li>File complaints about service quality</li>
            </ul>
            <h3>Customer Obligations:</h3>
            <ul>
              <li>Provide accurate information when making reservations</li>
              <li>Comply with restaurant rules</li>
              <li>Make full payment for services used</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. The Zzim's Rights and Obligations</h2>
            <h3>The Zzim's Rights:</h3>
            <ul>
              <li>Refuse service to customers who violate rules</li>
              <li>Change prices and menu after prior notice</li>
              <li>Right to refuse reservations in special cases</li>
            </ul>
            <h3>The Zzim's Obligations:</h3>
            <ul>
              <li>Provide services according to committed quality</li>
              <li>Protect customer personal information</li>
              <li>Handle customer complaints fairly</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Personal Information Protection</h2>
            <p>Customer personal information is used only for reservation and service purposes and is protected according to our privacy policy.</p>
          </section>

          <section className="policy-section">
            <h2>7. Disclaimer</h2>
            <p>The Zzim is not responsible for service interruptions due to force majeure causes such as natural disasters, war, or government orders.</p>
          </section>

          <section className="policy-section">
            <h2>8. Dispute Resolution</h2>
            <p>All disputes will be resolved through negotiation. If negotiation is not possible, disputes will be resolved at the competent court in HCMC under Vietnamese law.</p>
          </section>

          <section className="policy-section">
            <h2>9. Terms Changes</h2>
            <p>The Zzim may change these terms without prior notice. Changes will be posted on the website and take effect immediately upon posting.</p>
          </section>

          <section className="policy-section">
            <h2>10. Governing Law</h2>
            <p>These terms are governed by Vietnamese law.</p>
          </section>

          <p className="policy-update">Last updated: December 30, 2025</p>
        </div>
      </main>
    </>
  );
}