import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { t } from "@/utils/translate";
import Link from "next/link";
import store from "store";
import useSWR from "swr";
// import { useAuth } from '@/hooks/user';
import { commonApi } from "@/requests/frontend";
import { formatMoney } from "@/utils/common";
import styles from "./events.module.scss";

const Model = ({ children, setModel }) => (
  <div className="absolute inset-1/2">
    <div className="model">
      <div className="text-center text-5xl">thông báo</div>
      <img className="mt-4" src="/assets/events/red-envelope/line.png" />
      <img
        width={28}
        className="close"
        src="/assets/events/red-envelope/close.png"
        onClick={() => {
          setModel({
            isModel: false,
            content: null,
          });
        }}
      />
      {children}
    </div>
  </div>
);

export default function RedEnvelopePage() {
  // useAuth('/events/red-envelope');
  const [, dispatch] = useGlobalState();
  const router = useRouter();
  const [model, setModel] = useState({
    isModel: false,
    content: null,
  });

  const { data: topList } = useSWR("/ecrm-api/ActivityNationalDay/topPhuHao");

  function ranNum(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  function createDom(num) {
    var frag = document.createDocumentFragment(); //创建文档碎片
    for (var i = 0; i < num; i++) {
      var img = new Image();
      img.src = "/assets/events/red-envelope/hongbao.png";
      img.style.left = ranNum(0, window.innerWidth) + "px"; //让红包散列分布
      img.style.width = ranNum(50, 100) + "px"; //红包大小
      img.style.animationDelay = ranNum(0, 100) / 10 + "s"; //设置红包出现时间
      frag.appendChild(img);
    }
    return frag;
  }
  function rain() {
    let dom = createDom(5);
    let wrapper = document.getElementById("wrapper");
    wrapper.appendChild(dom);
  }

  useEffect(() => {
    rain();
    let timer = setInterval(() => {
      rain();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className="container mx-auto">
        <div className="bg-[#151825] px-4">
          <Link href={"/"}>
            <div className="flex justify-between items-center">
              <div className="logo_text"></div>
              <div className="flex items-center cursor-pointer">
                <div className="icon-close mr-2"></div>
                <div>{t("close")}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="banner-holder"></div>
        <div className="px-2">
          <div className="sec relative mt-8 pb-4">
            <div className="flex justify-center">
              <img
                width={200}
                src="/assets/events/red-envelope/title1.png"
                className="offset-title"
              />
            </div>
            <div className="overflow-auto" style={{ height: 160 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 pl-6">
                {topList?.info &&
                  topList.info instanceof Array &&
                  topList.info.map((item, index) => (
                    <div key={index} className="flex gap-1 items-center rank">
                      <div className="index">{index + 1}</div>
                      <div className="player">{item.playerName} |</div>
                      <div className="amount">
                        {formatMoney(item.receiveAmount)}
                      </div>
                      <div className="time">| {item.receiveDate}</div>
                    </div>
                  ))}
              </div>
            </div>
            <img
              width={40}
              src="/assets/events/red-envelope/flag.png"
              className="offset-flag"
            />
          </div>
          <div className="sec relative mt-12">
            <div className="flex justify-center">
              <img
                width={200}
                src="/assets/events/red-envelope/title2.png"
                className="offset-title"
              />
            </div>
            <div className="p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="star"></div>
                <div className="yellow">Thời gian khuyến mãi：</div>
                <div>01/09/2022 – 04/09/2022</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="star"></div>
                <div className="yellow">Đối tượng khuyến mãi：</div>
                <div>Toàn bộ thành viên của GG8</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="star"></div>
                <div className="yellow">Nội dung khuyến mãi:</div>
              </div>
              <table width={"100%"} className="mt-3">
                <tr>
                  <th>Nạp tiền</th>
                  <th>Số lần nhận bao lì xì</th>
                  <th>Tối thiểu</th>
                  <th>Tối đa</th>
                  <th>Vòng cược yêu cầu</th>
                </tr>
                <tr>
                  <td>2,000,000đ</td>
                  <td rowSpan={4}>1</td>
                  <td>18,000đ</td>
                  <td>38,000đ</td>
                  <td rowSpan={4}>3</td>
                </tr>
                <tr>
                  <td>5,000,000đ</td>
                  <td>88,000đ</td>
                  <td>168,000đ</td>
                </tr>
                <tr>
                  <td>10,000,000đ</td>
                  <td>288,000đ</td>
                  <td>588,000đ</td>
                </tr>
                <tr>
                  <td>30,000,000đ</td>
                  <td>1,888,000đ</td>
                  <td>3,888,000đ</td>
                </tr>
              </table>
              <p className="py-4">
                Toàn bộ thành viên của WIN1khi nạp tiền từ 2,000,000 trở lên sẽ
                nhận được 1 lần phong bao lì xì. Với khuyến mãi tiền thưởng này,
                WIN1hy vọng sẽ đem đến nhiều may mắn cho khách hàng.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="star"></div>
                <div className="yellow">Các điều kiện khác：</div>
              </div>
              <ul className="pl-8">
                <li>
                  Phương thức tham gia: thành viên bấm vào đường link trên web
                  để tham gia sự kiện này.
                </li>
                <li>ố lần tham gia mỗi ngày tối đa 3 lần</li>
                <li>
                  Khuyến mãi tiền thưởng cần đạt 5 vòng cược tại hợp lệ ( tiền
                  khuyến mãi nhận được 38,000 nhân với 3 vòng cược = 114,000
                  cược hợp lệ rút tiền )
                </li>
                <li>
                  Thành viên không điền đầy đủ thông tin cá nhân như ( Số điện
                  thoại di động, email, họ tên, tài khoản ngân hàng) sẽ không đủ
                  điều kiện đăng ký tham gia.
                </li>
                <li>
                  Bất cứ cá nhân hay tập thể nào có hành vi gian lận hoặc lạm
                  dụng để giành thắng lợi, WIN1có quyền hủy hoặc thu hồi tiền
                  thưởng và đóng băng tài khoản thành viên{" "}
                </li>
                <li>
                  WIN1chỉ tính các vé cược có kết quả thắng hoặc thua. Tất cả
                  các vé cược hòa, rút tiền sớm, cược hủy,v.v đều sẽ không được
                  tính là cược hợp lệ. Kết quả các vé cược nửa thắng, nửa thua
                  và nửa cược sẽ chỉ tính một nửa số vòng cược hợp lệ
                </li>
                <li>
                  WIN1có toàn quyền thực hiện , sửa đổi và quyết định cuối cùng
                  trong hoạt động này mà không cần thông báo trước
                </li>
                <li>
                  Hoạt động khuyến mãi này phải tuân thủ theo “ Điều khoản và
                  điều kiện chung” của GG8.
                </li>
              </ul>
            </div>
            <img
              width={40}
              src="/assets/events/red-envelope/flag.png"
              className="offset-flag"
            />
            <div className="hidden sm:block">
              <img
                width={180}
                src="/assets/events/red-envelope/flag_back.png"
                style={{
                  position: "absolute",
                  right: -180,
                  top: 150,
                }}
              />
              <img
                width={180}
                src="/assets/events/red-envelope/flag_back.png"
                style={{
                  position: "absolute",
                  left: -180,
                  top: 350,
                  transform: "scale(-1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center bg-[#570000] mt-12">
        Copyright © WIN1Reserved
      </div>
      <div
        id="wrapper"
        onClick={async () => {
          if (!store.get("user")) {
            router.push(
              `/sign-in?from=${encodeURIComponent("/events/red-envelope")}`
            );
          } else {
            let res = await commonApi.getRedEnvelope();
            // 成功
            if (res.info.code == "1") {
              setModel({
                isModel: true,
                content: (
                  <div className="success">
                    <div className="flex justify-center">
                      <div>
                        <img
                          width={100}
                          src="/assets/events/red-envelope/success.png"
                        />
                      </div>
                      <div className="text-white text-center mt-4">
                        <div className="text-3xl">CHÚC MỪNG!!!</div>
                        <div className="mt-2">BẠN ĐÃ NHẬN ĐƯỢC LÌ XÌ</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-[#7C070A] text-white text-center rounded-md px-8 py-3 cursor-pointer mt-4 text-5xl">
                        {`${formatMoney(res.info.info)}Đ`}
                      </div>
                    </div>
                  </div>
                ),
              });
            }
            // 充值
            else if (res.info.code == "2209011") {
              setModel({
                isModel: true,
                content: (
                  <div className="msg">
                    <div>{res.info.info}</div>
                    <div className="flex justify-center">
                      <div
                        className="bg-[#7C070A] text-white text-center rounded-full px-8 py-3 cursor-pointer mt-4"
                        onClick={() => {
                          router.push("/fund/trans");
                        }}
                      >
                        NẠP TIỀN
                      </div>
                    </div>
                  </div>
                ),
              });
            }
            // 错误信息
            else {
              setModel({
                isModel: true,
                content: (
                  <div className="msg">
                    <div>{res.info.info}</div>
                    <div className="flex justify-center">
                      <div
                        className="bg-[#7C070A] text-white text-center rounded-full px-8 py-3 cursor-pointer mt-4"
                        onClick={() => {
                          setModel({
                            isModel: false,
                            content: null,
                          });
                        }}
                      >
                        Xác Nhận
                      </div>
                    </div>
                  </div>
                ),
              });
            }
          }
        }}
      ></div>
      {model.isModel && <Model setModel={setModel}>{model.content}</Model>}
    </div>
  );
}
