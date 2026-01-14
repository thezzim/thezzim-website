// pages/vi/terms.js
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Điều Khoản Sử Dụng | THE ZZIM</title>
        <meta name="description" content="Điều khoản sử dụng của THE ZZIM" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://thezzimvn.com/vi/terms" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">Điều Khoản Sử Dụng</h1>
          <p className="policy-subtitle">Terms of Use</p>

          <section className="policy-section">
            <h2>1. Thông Tin Doanh Nghiệp</h2>
            <p><strong>Tên:</strong> The Zzim</p>
            <p><strong>Địa chỉ:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM, Việt Nam</p>
            <p><strong>Điện thoại:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. Điều Khoản Chung</h2>
            <p>Bằng việc truy cập và sử dụng website The Zzim, người dùng được coi là đã đọc, hiểu và đồng ý với các điều khoản sử dụng này.</p>
          </section>

          <section className="policy-section">
            <h2>3. Đặt Bàn và Hủy Đặt Bàn</h2>
            <ul>
              <li>Đặt bàn có thể thực hiện qua Zalo hoặc điện thoại</li>
              <li>Nếu không đến trong vòng 30 phút kể từ giờ đặt, đặt bàn sẽ tự động bị hủy</li>
              <li>Vui lòng liên hệ ít nhất 2 giờ trước để hủy hoặc thay đổi đặt bàn</li>
              <li>Nếu hủy đặt bàn mà không thông báo trước, đặt bàn tiếp theo có thể bị từ chối</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Quyền và Nghĩa Vụ của Khách Hàng</h2>
            <h3>Quyền của khách hàng:</h3>
            <ul>
              <li>Được cung cấp thông tin đầy đủ về dịch vụ</li>
              <li>Được bảo vệ thông tin cá nhân theo chính sách bảo mật</li>
              <li>Được khiếu nại về chất lượng dịch vụ</li>
            </ul>
            <h3>Nghĩa vụ của khách hàng:</h3>
            <ul>
              <li>Cung cấp thông tin chính xác khi đặt bàn</li>
              <li>Tuân thủ quy định của nhà hàng</li>
              <li>Thanh toán đầy đủ cho dịch vụ đã sử dụng</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Quyền và Nghĩa Vụ của The Zzim</h2>
            <h3>Quyền của The Zzim:</h3>
            <ul>
              <li>Từ chối phục vụ khách hàng vi phạm quy định</li>
              <li>Thay đổi giá và menu sau khi thông báo trước</li>
              <li>Quyền từ chối đặt bàn trong trường hợp đặc biệt</li>
            </ul>
            <h3>Nghĩa vụ của The Zzim:</h3>
            <ul>
              <li>Cung cấp dịch vụ theo chất lượng cam kết</li>
              <li>Bảo vệ thông tin cá nhân của khách hàng</li>
              <li>Xử lý khiếu nại của khách hàng một cách công bằng</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Bảo Vệ Thông Tin Cá Nhân</h2>
            <p>Thông tin cá nhân của khách hàng chỉ được sử dụng cho mục đích đặt bàn và cung cấp dịch vụ, được bảo vệ theo chính sách bảo mật của chúng tôi.</p>
          </section>

          <section className="policy-section">
            <h2>7. Miễn Trừ Trách Nhiệm</h2>
            <p>The Zzim không chịu trách nhiệm về việc gián đoạn dịch vụ do các nguyên nhân bất khả kháng như thiên tai, chiến tranh, lệnh của chính phủ.</p>
          </section>

          <section className="policy-section">
            <h2>8. Giải Quyết Tranh Chấp</h2>
            <p>Mọi tranh chấp sẽ được giải quyết thông qua thương lượng. Nếu không thể thương lượng, sẽ được giải quyết tại tòa án có thẩm quyền tại TP.HCM theo pháp luật Việt Nam.</p>
          </section>

          <section className="policy-section">
            <h2>9. Thay Đổi Điều Khoản</h2>
            <p>The Zzim có thể thay đổi điều khoản này mà không cần thông báo trước. Các thay đổi sẽ được đăng trên website và có hiệu lực ngay khi đăng.</p>
          </section>

          <section className="policy-section">
            <h2>10. Luật Áp Dụng</h2>
            <p>Điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam.</p>
          </section>

          <p className="policy-update">Cập nhật lần cuối: 30 tháng 12 năm 2025</p>
        </div>
      </main>
    </>
  );
}
