// pages/privacy.js
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>개인정보처리방침 | THE ZZIM</title>
        <meta name="description" content="THE ZZIM 개인정보처리방침" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">개인정보처리방침</h1>
          <p className="policy-subtitle">Privacy Policy</p>

          <section className="policy-section">
            <h2>1. 사업자 정보</h2>
            <p><strong>정보 수집 및 관리 주체:</strong> The Zzim</p>
            <p><strong>주소:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM, Việt Nam</p>
            <p><strong>전화:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. 수집하는 개인정보</h2>
            <p>The Zzim은 예약 서비스 제공을 위해 다음 정보를 수집합니다:</p>
            <ul>
              <li><strong>성명:</strong> 예약 확인 및 연락용</li>
              <li><strong>전화번호:</strong> 예약 확인 및 변경 알림용</li>
              <li><strong>Zalo:</strong> 연락 및 예약 확인용</li>
              <li><strong>예약 정보:</strong> 인원수, 시간, 특별 요청사항</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. 개인정보 이용 목적</h2>
            <p>수집된 개인정보는 다음 목적으로만 사용됩니다:</p>
            <ul>
              <li>예약 확인 및 관리</li>
              <li>예약 관련 고객 연락</li>
              <li>고객 요청 및 불만 처리</li>
              <li>서비스 품질 개선</li>
              <li>프로모션 정보 발송 (고객 동의 시)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. 정보 보유 기간</h2>
            <p>예약 관련 개인정보는 마지막 예약일로부터 12개월간 보관됩니다. 이후 베트남 개인정보보호법에 따라 완전히 삭제됩니다.</p>
          </section>

          <section className="policy-section">
            <h2>5. 제3자 정보 제공</h2>
            <p>The Zzim은 다음의 경우를 제외하고 고객 동의 없이 제3자에게 개인정보를 제공하지 않습니다:</p>
            <ul>
              <li>법률에 따른 관할 정부 기관의 요청</li>
              <li>고객의 권리와 생명 보호를 위한 긴급 상황</li>
              <li>베트남 법률에 따른 법적 의무 이행</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. 개인정보 보호 조치</h2>
            <p>The Zzim은 고객 개인정보 보호를 위해 다음 기술적, 관리적 조치를 적용합니다:</p>
            <ul>
              <li>민감 정보 암호화</li>
              <li>담당 직원에게만 정보 접근 권한 제한</li>
              <li>정기적인 보안 시스템 점검 및 업데이트</li>
              <li>직원 개인정보 보호 교육</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. 고객의 개인정보 관련 권리</h2>
            <p>베트남 개인정보보호법에 따라 고객은 다음 권리를 갖습니다:</p>
            <ul>
              <li><strong>알 권리:</strong> 개인정보 수집 및 이용에 대한 정보 요청</li>
              <li><strong>접근권:</strong> 본인의 개인정보 열람 요청</li>
              <li><strong>정정권:</strong> 부정확한 개인정보 수정 요청</li>
              <li><strong>삭제권:</strong> 개인정보 삭제 요청</li>
              <li><strong>이의제기권:</strong> 개인정보 처리에 대한 이의 제기</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. 권리 행사 방법</h2>
            <p>고객은 다음 연락처를 통해 위의 권리를 행사할 수 있습니다:</p>
            <ul>
              <li><strong>전화:</strong> +84 82 525 1004</li>
              <li><strong>Zalo:</strong> 0825 251 004</li>
              <li><strong>주소:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM</li>
            </ul>
            <p>요청 접수 후 15영업일 이내에 응답드립니다.</p>
          </section>

          <section className="policy-section">
            <h2>9. 쿠키 및 추적 기술</h2>
            <p>당사 웹사이트는 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다. 브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 웹사이트 기능에 영향을 줄 수 있습니다.</p>
          </section>

          <section className="policy-section">
            <h2>10. 개인정보처리방침 변경</h2>
            <p>The Zzim은 본 개인정보처리방침을 변경할 수 있습니다. 변경 사항은 웹사이트에 게시되며, 게시 즉시 효력이 발생합니다. 변경 사항을 확인하기 위해 정기적으로 확인해 주시기 바랍니다.</p>
          </section>

          <section className="policy-section">
            <h2>11. 문의</h2>
            <p>본 개인정보처리방침에 대한 질문이나 문의사항이 있으시면 연락 주시기 바랍니다:</p>
            <p><strong>The Zzim</strong><br />
            1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM<br />
            전화: +84 82 525 1004<br />
            Zalo: 0825 251 004</p>
          </section>

          <p className="policy-update">최종 업데이트: 2025년 12월 30일</p>
        </div>
      </main>
    </>
  );
}
