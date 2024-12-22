import "./SectionMain.scss";

import React, { useEffect, useRef, useState } from "react";

function SectionMain(){

    const innerRef = useRef(null); // Tham chiếu đến phần tử DOM
    const [marginTop, setMarginTop] = useState(0); // Trạng thái lưu giá trị margin-top

    useEffect(() => {
        // Tính toán chiều cao của phần tử khi render
        if (innerRef.current) {
        const height = innerRef.current.offsetHeight;
        setMarginTop(height / 2); // Đặt margin-top = 1/2 chiều cao
        }
    }, []);

    return(
        <>
            <div className="SectionMain" style={{
                backgroundImage: "url('/QTDTCDH/SectionMain1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            QUẦN THỂ DI TÍCH CỐ  ĐÔ HUẾ
                        </div>
                        <div className="SectionMain__inner__disc">
                            Huế là nơi lưu giữ hồn cốt lịch sử và văn hóa của dân tộc. Hãy một lần đến Huế để cảm nhận vẻ đẹp thanh bình và nét quyến rũ độc đáo của cố đô!
                        </div>
                    </div>
                </div>
            </div>
            <div className="SectionMainP2"
                ref={innerRef}
                style={{ marginTop: `-${marginTop}px` }}
            >
                <div className="container">
                    <div className="SectionMainP2__inner">
                        <div className="SectionMainP2__inner__title">
                            Dự án H-HNUE Chào mừng quý khách đến trải nghiệm về Quần thể di tích Cố đô Huế!
                        </div>
                        <div className="SectionMainP2__inner__disc">
                            Tham gia trải nghiệm về Quần thể di tích Cố đô Huế quý khách sẽ:
                        </div>
                        <ul>
                            <li>
                                Xác định được vị trí địa lí, quy mô và niên đại của di sản văn hóa Việt Nam
                            </li>
                            <li>
                                Biết được những thông tin cơ bản về di sản Quần thể di tích 
                            </li>
                            <li>
                                Tự hào về di sản Quần thể di tích Cố đô Huế của dân tộc Việt Nam, giá trị di sản trong tiến trình phát triển lịch sử nhân loại
                            </li>
                            <li>
                                Góp phần quảng bá hình ảnh đất nước, văn hóa, con người Việt Nam đến cộng đồng nói riêng và thế giới nói chung.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;