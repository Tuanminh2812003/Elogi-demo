import "./Admin.scss";
import React, { useState, useEffect } from "react";

import hanoiData from "./hanoi_districts_wards.json"; // Import file JSON

function Admin(){

    const [address, setAddress] = useState(""); // State lưu địa chỉ
    const [districts, setDistricts] = useState([]); // Lưu danh sách quận/huyện
    const [wards, setWards] = useState([]); // Lưu danh sách phường/xã
    const [selectedDistrict, setSelectedDistrict] = useState(""); // Quận/huyện được chọn

    useEffect(() => {
        // Hàm lấy vị trí và chuyển đổi tọa độ thành địa chỉ
        const fetchAddress = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
                        try {
                            const response = await fetch(nominatimUrl);
                            const data = await response.json();
                            if (data && data.display_name) {
                                setAddress(data.display_name); // Lưu địa chỉ vào state
                            } else {
                                console.error("Không thể lấy địa chỉ từ Nominatim.");
                            }
                        } catch (error) {
                            console.error("Lỗi khi gọi Nominatim API:", error);
                        }
                    },
                    (error) => {
                        console.error("Lỗi khi lấy vị trí:", error.message);
                    }
                );
            } else {
                console.error("Trình duyệt không hỗ trợ Geolocation.");
            }
        };

        fetchAddress();
    }, []);
    useEffect(() => {
        // Lấy danh sách các quận/huyện từ file JSON
        setDistricts(Object.keys(hanoiData));
    }, []);

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setWards(hanoiData["Hanoi"][district] || []); // Lấy danh sách phường/xã
    };

    return(
        <>
            <div className="Admin">
                <div className="Admin__header">
                    Thêm tòa nhà
                </div>
                <input type="radio" name="addHouse" defaultChecked id="thongtinchung"/>
                <input type="radio" name="addHouse" id="thongtindichvu"/>
                <div className="Admin__tab">
                    <label htmlFor="thongtinchung" className="thongtinchung">Thông tin chung</label>
                    <label htmlFor="thongtindichvu" className="thongtindichvu">Thông tin dịch vụ</label>
                </div>
                <form action="" className="Admin__form form1">
                    <input type="text" placeholder="Tên chủ nhà trọ*" required/>
                    <input type="number" placeholder="Số điện thoại chủ nhà trọ*" required/>
                    <input type="text" placeholder="Tên tòa nhà"/>
                    <input type="text" placeholder="Mã nhân viên cskh"/>
                    <div className="Admin__form__row">
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__title">
                                Nhà trọ
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro1"/>
                                <label htmlFor="chonhatro1" className="chonhatro1">Nhà riêng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro2"/>
                                <label htmlFor="chonhatro2" className="chonhatro2">Nhà cấp 4</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro3"/>
                                <label htmlFor="chonhatro3" className="chonhatro3">Chung cư mini</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro4"/>
                                <label htmlFor="chonhatro4" className="chonhatro4">Nhà trọ bình dân</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro5"/>
                                <label htmlFor="chonhatro5" className="chonhatro5">Ký túc xá</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro6"/>
                                <label htmlFor="chonhatro6" className="chonhatro6">Homestay</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro7"/>
                                <label htmlFor="chonhatro7" className="chonhatro7">nhà trọ chung chủ</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro8"/>
                                <label htmlFor="chonhatro8" className="chonhatro8">nhà trọ tự quản lý</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro9"/>
                                <label htmlFor="chonhatro9" className="chonhatro9">Nhà nguyên căn</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro10"/>
                                <label htmlFor="chonhatro10" className="chonhatro10">Sleep box</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="chonhatro" id="chonhatro11"/>
                                <label htmlFor="chonhatro11" className="chonhatro11">nhà trọ cho thuê</label>
                            </div>
                        </div>
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__title">
                                Căn hộ
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho1"/>
                                <label htmlFor="choncanho1" className="choncanho1">Căn hộ studio</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho2"/>
                                <label htmlFor="choncanho2" className="choncanho2">Căn hộ chung cư</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho3"/>
                                <label htmlFor="choncanho3" className="choncanho3">Căn hộ dịch vụ</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho4"/>
                                <label htmlFor="choncanho4" className="choncanho4">Căn hộ văn phòng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho5"/>
                                <label htmlFor="choncanho5" className="choncanho5">Căn hộ thương mại</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho6"/>
                                <label htmlFor="choncanho6" className="choncanho6">Căn hộ áp mái</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho7"/>
                                <label htmlFor="choncanho7" className="choncanho7">Căn hộ penthouse</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho8"/>
                                <label htmlFor="choncanho8" className="choncanho8">Căn hộ dual-key</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho9"/>
                                <label htmlFor="choncanho9" className="choncanho9">Nhà nguyên căn</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho10"/>
                                <label htmlFor="choncanho10" className="choncanho10">Căn hộ duplex</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho11"/>
                                <label htmlFor="choncanho11" className="choncanho11">Căn hộ sky villa</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="radio" name="choncanho" id="choncanho12"/>
                                <label htmlFor="choncanho12" className="choncanho12">Căn hộ tầng hầm</label>
                            </div>
                        </div>
                    </div>
                    <div className="Admin__form__row">
                        <input type="number" placeholder="Tổng số tầng*" required/>
                        <input type="number" placeholder="Tổng số phòng*" required/>
                    </div>
                    <div className="Admin__form__row2">
                        <div className="Admin__form__row2__choice">
                            <input type="radio" name="chonhatrocanho" id="chonhatrocanho1"/>
                            <label htmlFor="chonhatrocanho1" className="chonhatrocanho1">Nhà trọ</label>
                        </div>
                        <div className="Admin__form__row2__choice">
                            <input type="radio" name="chonhatrocanho" id="chonhatrocanho2"/>
                            <label htmlFor="chonhatrocanho2" className="chonhatrocanho2">Căn hộ</label>
                        </div>
                    </div>
                    <div className="Admin__form__row3">
                        {/* Ô input tự động điền địa chỉ */}
                        <input
                            type="text"
                            placeholder="Địa chỉ & vị trí"
                            value={address}
                            readOnly
                        />
                        <div className="Admin__form__row3__button">Bản đồ</div>
                    </div>
                    <select required>
                        <option value={"hanoi"}>Hà Nội</option>
                    </select>
                    <div className="Admin__form__row4">
                        <select required onChange={handleDistrictChange}>
                            <option value="">Chọn Quận/Huyện</option>
                            {Object.keys(hanoiData["Hanoi"]).map((district) => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>

                        {/* Dropdown Phường/Xã */}
                        <select required>
                            <option value="">Chọn Phường/Xã</option>
                            {wards.map((ward) => (
                                <option key={ward} value={ward}>
                                    {ward}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input type="text" placeholder="Địa chỉ chi  tiết*" required/>
                    <div className="Admin__form__row">
                        <input type="number" placeholder="Diện tích trung bình (m2)*" required/>
                        <input type="number" placeholder="Giá thuê (đ/tháng)*" required/>
                    </div>
                    <div className="Admin__form__title">
                        Thuê phòng có cần đặt cọc?
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="datcoc" id="datcoc1"/>
                            <label htmlFor="datcoc1" className="datcoc1">1 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="datcoc" id="datcoc2"/>
                            <label htmlFor="datcoc2" className="datcoc2">2 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="datcoc" id="datcoc3"/>
                            <label htmlFor="datcoc3" className="datcoc3">3 tháng</label>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Thuê phòng phải đóng trước
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc1"/>
                            <label htmlFor="dongtruoc1" className="dongtruoc1">1 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc2"/>
                            <label htmlFor="dongtruoc2" className="dongtruoc2">3 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc3"/>
                            <label htmlFor="dongtruoc3" className="dongtruoc3">6 tháng</label>
                        </div>
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc4"/>
                            <label htmlFor="dongtruoc4" className="dongtruoc4">12 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc5"/>
                            <label htmlFor="dongtruoc5" className="dongtruoc5">24 tháng</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongtruoc" id="dongtruoc6"/>
                            <label htmlFor="dongtruoc6" className="dongtruoc6">36 tháng</label>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Thuê phòng có cho phép nấu ăn
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="nauan" id="nauan1"/>
                            <label htmlFor="nauan1" className="nauan1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="nauan" id="nauan2"/>
                            <label htmlFor="nauan2" className="nauan2">Không</label>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Thuê phòng có cho nuôi động vật
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongvat" id="dongvat1"/>
                            <label htmlFor="dongvat1" className="dongvat1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="dongvat" id="dongvat2"/>
                            <label htmlFor="dongvat2" className="dongvat2">Không</label>
                        </div>
                    </div>
                </form>
                <form action="" className="Admin__form form2"> 
                    <div className="Admin__form__title">
                        Thông tin dịch vụ tiện ích
                    </div>
                    <div className="Admin__form__row">
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich1" name="tienich"/>
                                <label htmlFor="tienich1">Bảo vệ</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich2" name="tienich"/>
                                <label htmlFor="tienich2">Dọn vệ sinh</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich3" name="tienich"/>
                                <label htmlFor="tienich3">camera an ninh</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich4" name="tienich"/>
                                <label htmlFor="tienich4">Khóa cổng vân tay</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich5" name="tienich"/>
                                <label htmlFor="tienich5">Thang máy</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich6" name="tienich"/>
                                <label htmlFor="tienich6">Giờ giấc tự do</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich7" name="tienich"/>
                                <label htmlFor="tienich7">Máy giặt chung</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich8" name="tienich"/>
                                <label htmlFor="tienich8">máy giặt riêng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich9" name="tienich"/>
                                <label htmlFor="tienich9">Bếp nấu ăn</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich10" name="tienich"/>
                                <label htmlFor="tienich10">Bếp gas</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich11" name="tienich"/>
                                <label htmlFor="tienich11">Bếp từ</label>
                            </div>
                        </div>
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich12" name="tienich"/>
                                <label htmlFor="tienich12">Bảo vệ</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich13" name="tienich"/>
                                <label htmlFor="tienich13">Dọn vệ sinh</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich14" name="tienich"/>
                                <label htmlFor="tienich14">camera an ninh</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich15" name="tienich"/>
                                <label htmlFor="tienich15">Khóa cổng vân tay</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich16" name="tienich"/>
                                <label htmlFor="tienich16">Thang máy</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich17" name="tienich"/>
                                <label htmlFor="tienich17">Giờ giấc tự do</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich18" name="tienich"/>
                                <label htmlFor="tienich18">Máy giặt chung</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich19" name="tienich"/>
                                <label htmlFor="tienich19">máy giặt riêng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich20" name="tienich"/>
                                <label htmlFor="tienich20">Bếp nấu ăn</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich21" name="tienich"/>
                                <label htmlFor="tienich21">Bếp gas</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tienich22" name="tienich"/>
                                <label htmlFor="tienich22">Bếp từ</label>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Tiện ích khác..."></input>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá điện"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá nước"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá vệ sinh"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá dịch vụ"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá Internet cáp quang"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__row6">
                        <input type="number" placeholder="Giá truyền hình cáp"></input>
                        <select>
                            <option>
                                Tính theo người
                            </option>
                            <option>
                                Tính theo đồng hồ
                            </option>
                            <option>
                                Tính theo phòng
                            </option>
                        </select>
                    </div>
                    <div className="Admin__form__title">
                        Thông tin khu để xe
                    </div>
                    <div className="Admin__form__row">
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe1" name="dexe"/>
                                <label htmlFor="dexe1">Xe đạp</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe2" name="dexe"/>
                                <label htmlFor="dexe2">Xe đạp điện</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe3" name="dexe"/>
                                <label htmlFor="dexe3">Xe máy xăng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe4" name="dexe"/>
                                <label htmlFor="dexe4">Xe máy điện</label>
                            </div>
                        </div>
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe5" name="dexe"/>
                                <label htmlFor="dexe5">Ô tô xăng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe6" name="dexe"/>
                                <label htmlFor="dexe6">Ô tô dầu</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="dexe7" name="dexe"/>
                                <label htmlFor="dexe7">Ô tô điện</label>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Giá gửi xe đạp"/>
                    <input type="text" placeholder="Giá gửi xe máy"/>
                    <input type="text" placeholder="Giá gửi ô tô"/>
                    <div className="Admin__form__title">
                        Thông tin phòng cháy chữa cháy
                    </div>
                    <div className="Admin__form__disc">
                        Nhà thuê có hệ thống phòng cháy (cửa chống cháy/báo cháy/báo khói) đạt tiêu chuẩn theo đúng quy định không
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" defaultChecked name="hethongchuachay" id="hethongchuachay1" />
                            <label htmlFor="hethongchuachay1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="hethongchuachay" id="hethongchuachay2" />
                            <label htmlFor="hethongchuachay2">Không</label>
                        </div>
                    </div>
                    <div className="Admin__form__disc">
                        Nhà thuê có đầy đủ công cụ chữa cháy (bình chữa cháy/vòi nước/dụng cụ) đạt tiêu chuẩn theo quy định không?
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" defaultChecked name="congcuchuachay" id="congcuchuachay1" />
                            <label htmlFor="congcuchuachay1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="congcuchuachay" id="congcuchuachay2" />
                            <label htmlFor="congcuchuachay2">Không</label>
                        </div>
                    </div>
                    <div className="Admin__form__disc">
                        Nhà thuê có hệ thống thoát hiểm (thang máy thoát hiểm/cầu thang thoát hiểm) đạt tiêu chuẩn theo quy định không?
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" defaultChecked name="thoathiem" id="thoathiem1" />
                            <label htmlFor="thoathiem1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="thoathiem" id="thoathiem2" />
                            <label htmlFor="thoathiem2">Không</label>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Văn hóa sinh hoạt, an ninh, nội quy của khu nhà
                    </div>
                    <input type="text" placeholder="Văn hóa, nội quy"/>
                    <div className="Admin__form__disc">
                        Bạn bè đến chơi có để xe qua đêm không?
                    </div>
                    <div className="Admin__form__row5">
                        <div className="Admin__form__row5__col">
                            <input type="radio" defaultChecked name="quadem" id="quadem1" />
                            <label htmlFor="quadem1">Có</label>
                        </div>
                        <div className="Admin__form__row5__col">
                            <input type="radio" name="quadem" id="quadem2" />
                            <label htmlFor="quadem2">Không</label>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Internet cáp quang
                    </div>
                    <div className="Admin__form__row">
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="capquang1" name="capquang"/>
                                <label htmlFor="capquang1">FPT</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="capquang2" name="capquang"/>
                                <label htmlFor="capquang2">VNPT</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="capquang3" name="capquang"/>
                                <label htmlFor="capquang3">Khác</label>
                            </div>
                        </div>
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="capquang4" name="capquang"/>
                                <label htmlFor="capquang4">Viettel</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="capquang5" name="capquang"/>
                                <label htmlFor="capquang5">SCTV</label>
                            </div>
                        </div>
                    </div>
                    <div className="Admin__form__title">
                        Internet trả trước bao nhiêu tháng
                    </div>
                    <div className="Admin__form__row">
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc1" name="tratruoc"/>
                                <label htmlFor="tratruoc1">1 tháng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc2" name="tratruoc"/>
                                <label htmlFor="tratruoc2">3 tháng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc3" name="tratruoc"/>
                                <label htmlFor="tratruoc3">6 tháng</label>
                            </div>
                        </div>
                        <div className="Admin__form__row__col">
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc4" name="tratruoc"/>
                                <label htmlFor="tratruoc4">12 tháng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc5" name="tratruoc"/>
                                <label htmlFor="tratruoc5">24 tháng</label>
                            </div>
                            <div className="Admin__form__row__col__choice">
                                <input type="checkbox" id="tratruoc6" name="tratruoc"/>
                                <label htmlFor="tratruoc6">Khác</label>
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Ghi chú"/>
                </form>
                <div className="Admin__button">
                    Lưu thông tin
                </div>
            </div>
        </>
    )
}

export default Admin;