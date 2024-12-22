import "./Section5.scss";

function Section5(){
    return(
        <>
            <div className="Section5">
                <div className="container">
                    <div className="Section5__inner">
                        <div className="Section5__inner__title">
                            Nhắc về kinh thành Huế... - Section5
                        </div>
                        <div className="Section5__inner__disc">
                            Các điểm đến nổi bật
                        </div>
                        <div className="Section5__inner__mainText">
                            Kinh thành Huế
                        </div>
                        <div className="Section5__inner__text">
                            <ul>
                                <li>
                                    Hệ thống thành quách, cung điện được xây dựng từ thế kỷ 19.
                                </li>
                                <li>
                                    Các điểm tham quan chính: Ngọ Môn, Điện Thái Hòa, Tử Cấm Thành.
                                </li>
                            </ul>
                        </div>
                        <div className="Section5__inner__mainText">
                            Lăng tẩm các vua Nguyễn
                        </div>
                        <div className="Section5__inner__text">
                            <ul>
                                <li>
                                    Lăng Tự Đức: Kiến trúc hài hòa với thiên nhiên.
                                </li>
                                <li>
                                    Lăng Minh Mạng: Phong cách trang nghiêm, cân đối.
                                </li>
                                <li>
                                    Lăng Khải Định: Sự kết hợp giữa kiến trúc Á – Âu.
                                </li>
                            </ul>
                        </div>
                        <div className="Section5__inner__image" style={{
                            backgroundImage: "url('/QTDTCDH/Section5-1.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="Section5__inner__disc">
                            Hành trình khám phá
                        </div>
                        <div className="Section5__inner__mainText2">
                            <b><i>Thời gian lý tưởng</i></b> Từ tháng 3 đến tháng 8 (thời tiết đẹp, ít mưa).
                        </div>
                        <div className="Section5__inner__mainText">
                            Phương tiện di chuyển:
                        </div>
                        <div className="Section5__inner__text">
                            <ul>
                                <li>
                                    Máy bay: Đến sân bay Phú Bài.
                                </li>
                                <li>
                                    Xe lửa: Ga Huế kết nối nhiều tỉnh thành.
                                </li>
                            </ul>
                        </div>
                        <div className="Section5__inner__text2">
                            Huế là nơi lưu giữ hồn cốt lịch sử và văn hóa của dân tộc. Hãy một lần đến Huế để cảm nhận vẻ đẹp thanh bình và nét quyến rũ độc đáo của cố đô!
                        </div>
                        <div className="Section5__inner__image2" style={{
                            backgroundImage: "url('/QTDTCDH/Section5-3.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="Section5__inner__image2" style={{
                            backgroundImage: "url('/QTDTCDH/Section5-2.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5;