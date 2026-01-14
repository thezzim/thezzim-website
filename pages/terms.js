// pages/terms.js
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>이용약관 | THE ZZIM</title>
        <meta name="description" content="THE ZZIM 이용약관" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">이용약관</h1>
          <p className="policy-subtitle">Terms of Use</p>

          <section className="policy-section">
            <h2>1. 사업자 정보</h2>
            <p><strong>상호:</strong> The Zzim</p>
            <p><strong>주소:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM, Việt Nam</p>
            <p><strong>전화:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. 일반 조항</h2>
            <p>The Zzim 웹사이트에 접속하고 이용함으로써, 사용자는 본 이용약관을 읽고, 이해하며, 동의한 것으로 간주됩니다. 동의하지 않으시면 서비스 이용을 중단해 주시기 바랍니다.</p>
          </section>

          <section className="policy-section">
            <h2>3. 예약 및 예약 취소</h2>
            <ul>
              <li>예약은 Zalo 또는 전화로 가능합니다</li>
              <li>예약 시간으로부터 30분 내 미도착 시 예약이 자동 취소됩니다</li>
              <li>예약 취소 또는 변경은 최소 2시간 전에 연락 부탁드립니다</li>
              <li>사전 연락 없이 예약을 취소할 경우, 다음 예약이 거부될 수 있습니다</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. 고객의 권리와 의무</h2>
            <h3>고객의 권리:</h3>
            <ul>
              <li>서비스에 대한 완전한 정보 제공</li>
              <li>개인정보처리방침에 따른 개인정보 보호</li>
              <li>서비스 품질에 대한 불만 제기</li>
            </ul>
            <h3>고객의 의무:</h3>
            <ul>
              <li>예약 시 정확한 정보 제공</li>
              <li>레스토랑 규정 준수</li>
              <li>이용한 서비스에 대한 완전한 결제</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. The Zzim의 권리와 의무</h2>
            <h3>The Zzim의 권리:</h3>
            <ul>
              <li>규정을 위반한 고객에 대한 서비스 거부</li>
              <li>사전 공지 후 가격 및 메뉴 변경</li>
              <li>특별한 경우 예약 거부권 보유</li>
            </ul>
            <h3>The Zzim의 의무:</h3>
            <ul>
              <li>약속된 품질의 서비스 제공</li>
              <li>고객 개인정보 보호</li>
              <li>고객 불만의 공정한 처리</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. 개인정보 보호</h2>
            <p>고객의 개인정보는 예약 및 서비스 제공 목적으로만 사용되며, 당사의 개인정보처리방침에 따라 보호됩니다.</p>
          </section>

          <section className="policy-section">
            <h2>7. 면책 조항</h2>
            <p>The Zzim은 천재지변, 전쟁, 정부 명령, 통제 불가능한 기술적 문제 등 불가항력적 원인으로 인한 서비스 중단에 대해 책임지지 않습니다.</p>
          </section>

          <section className="policy-section">
            <h2>8. 분쟁 해결</h2>
            <p>모든 분쟁은 협의를 통해 해결됩니다. 협의가 불가능한 경우, 베트남 법률에 따라 호치민시 관할 법원에서 해결됩니다.</p>
          </section>

          <section className="policy-section">
            <h2>9. 약관 변경</h2>
            <p>The Zzim은 사전 통보 없이 본 약관을 변경할 수 있습니다. 변경 사항은 웹사이트에 게시되며, 게시 즉시 효력이 발생합니다.</p>
          </section>

          <section className="policy-section">
            <h2>10. 준거법</h2>
            <p>본 약관은 베트남 법률의 적용을 받습니다. 모든 분쟁은 베트남 법률에 따라 해결됩니다.</p>
          </section>

          <p className="policy-update">최종 업데이트: 2025년 12월 30일</p>
        </div>
      </main>
    </>
  );
}
