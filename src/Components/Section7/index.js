import "./Section7.scss";

function Section7(){
    return(
        <>
            <div className="Section7">
                <div className="container">
                    <div className="Section7__inner">
                        <div className="Section7__inner__title">
                            Không gian trách nhiệm
                        </div>
                        <div className="Section7__inner__disc">
                            Bạn hãy thiết kế một video/poster hoặc lá thư để thể hiện chủ đề: Đề xuất những biện pháp bảo tồn và quảng bá hình ảnh di sản Quần thể di tích Cố đô Huế
                        </div>
                        <form>
                            <label for="Section7__share">Chia sẻ của bạn</label>
                            <textarea id="Section7__share"/>
                            <label for="Section7__file">Đính kèm file</label>
                            <input type="file"/>
                            <button>Gửi phản hồi của bạn</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7;