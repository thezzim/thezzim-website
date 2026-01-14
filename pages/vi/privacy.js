// pages/vi/privacy.js
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Chính Sách Bảo Mật | THE ZZIM</title>
        <meta name="description" content="Chính sách bảo mật của THE ZZIM" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://thezzimvn.com/vi/privacy" />
      </Head>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">Chính Sách Bảo Mật</h1>
          <p className="policy-subtitle">Privacy Policy</p>

          <section className="policy-section">
            <h2>1. Thông Tin Doanh Nghiệp</h2>
            <p><strong>Đơn vị thu thập và quản lý thông tin:</strong> The Zzim</p>
            <p><strong>Địa chỉ:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM, Việt Nam</p>
            <p><strong>Điện thoại:</strong> +84 82 525 1004</p>
            <p><strong>Zalo:</strong> 0825 251 004</p>
          </section>

          <section className="policy-section">
            <h2>2. Thông Tin Cá Nhân Thu Thập</h2>
            <p>The Zzim thu thập các thông tin sau để cung cấp dịch vụ đặt bàn:</p>
            <ul>
              <li><strong>Họ tên:</strong> Để xác nhận và liên hệ đặt bàn</li>
              <li><strong>Số điện thoại:</strong> Để xác nhận và thông báo thay đổi đặt bàn</li>
              <li><strong>Zalo:</strong> Để liên hệ và xác nhận đặt bàn</li>
              <li><strong>Thông tin đặt bàn:</strong> Số người, thời gian, yêu cầu đặc biệt</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Mục Đích Sử Dụng Thông Tin</h2>
            <p>Thông tin cá nhân thu thập chỉ được sử dụng cho các mục đích sau:</p>
            <ul>
              <li>Xác nhận và quản lý đặt bàn</li>
              <li>Liên hệ khách hàng về đặt bàn</li>
              <li>Xử lý yêu cầu và khiếu nại của khách hàng</li>
              <li>Cải thiện chất lượng dịch vụ</li>
              <li>Gửi thông tin khuyến mãi (khi khách hàng đồng ý)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Thời Gian Lưu Trữ</h2>
            <p>Thông tin cá nhân liên quan đến đặt bàn được lưu trữ trong 12 tháng kể từ lần đặt bàn cuối cùng. Sau đó sẽ được xóa hoàn toàn theo Luật Bảo vệ Dữ liệu Cá nhân của Việt Nam.</p>
          </section>

          <section className="policy-section">
            <h2>5. Chia Sẻ Thông Tin Cho Bên Thứ Ba</h2>
            <p>The Zzim không cung cấp thông tin cá nhân cho bên thứ ba mà không có sự đồng ý của khách hàng, trừ các trường hợp sau:</p>
            <ul>
              <li>Yêu cầu từ cơ quan nhà nước có thẩm quyền theo quy định pháp luật</li>
              <li>Trường hợp khẩn cấp để bảo vệ quyền lợi và tính mạng của khách hàng</li>
              <li>Thực hiện nghĩa vụ pháp lý theo pháp luật Việt Nam</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Biện Pháp Bảo Vệ Thông Tin</h2>
            <p>The Zzim áp dụng các biện pháp kỹ thuật và quản lý sau để bảo vệ thông tin cá nhân của khách hàng:</p>
            <ul>
              <li>Mã hóa thông tin nhạy cảm</li>
              <li>Giới hạn quyền truy cập thông tin cho nhân viên phụ trách</li>
              <li>Kiểm tra và cập nhật hệ thống bảo mật định kỳ</li>
              <li>Đào tạo nhân viên về bảo vệ thông tin cá nhân</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Quyền Của Khách Hàng</h2>
            <p>Theo Luật Bảo vệ Dữ liệu Cá nhân của Việt Nam, khách hàng có các quyền sau:</p>
            <ul>
              <li><strong>Quyền được biết:</strong> Yêu cầu thông tin về việc thu thập và sử dụng dữ liệu cá nhân</li>
              <li><strong>Quyền truy cập:</strong> Yêu cầu xem thông tin cá nhân của mình</li>
              <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu sửa thông tin cá nhân không chính xác</li>
              <li><strong>Quyền xóa:</strong> Yêu cầu xóa thông tin cá nhân</li>
              <li><strong>Quyền phản đối:</strong> Phản đối việc xử lý thông tin cá nhân</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Cách Thực Hiện Quyền</h2>
            <p>Khách hàng có thể thực hiện các quyền trên qua các kênh liên hệ sau:</p>
            <ul>
              <li><strong>Điện thoại:</strong> +84 82 525 1004</li>
              <li><strong>Zalo:</strong> 0825 251 004</li>
              <li><strong>Địa chỉ:</strong> 1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM</li>
            </ul>
            <p>Chúng tôi sẽ phản hồi trong vòng 15 ngày làm việc sau khi nhận được yêu cầu.</p>
          </section>

          <section className="policy-section">
            <h2>9. Cookie và Công Nghệ Theo Dõi</h2>
            <p>Website của chúng tôi có thể sử dụng cookie để cải thiện trải nghiệm người dùng. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên điều này có thể ảnh hưởng đến một số tính năng của website.</p>
          </section>

          <section className="policy-section">
            <h2>10. Thay Đổi Chính Sách Bảo Mật</h2>
            <p>The Zzim có thể thay đổi chính sách bảo mật này. Các thay đổi sẽ được đăng trên website và có hiệu lực ngay khi đăng.</p>
          </section>

          <section className="policy-section">
            <h2>11. Liên Hệ</h2>
            <p>Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:</p>
            <p><strong>The Zzim</strong><br />
            1B7 Đường Số 29, Khu Phố 5, Thủ Đức, TP.HCM<br />
            Điện thoại: +84 82 525 1004<br />
            Zalo: 0825 251 004</p>
          </section>

          <p className="policy-update">Cập nhật lần cuối: 30 tháng 12 năm 2025</p>
        </div>
      </main>
    </>
  );
}
