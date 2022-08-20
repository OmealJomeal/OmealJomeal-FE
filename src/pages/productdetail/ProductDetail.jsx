import React, { useState } from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";

const ProductBox = styled.div`
  width: 555px;
`;

const ProductMiniBox = styled.div`
  width: 125px;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
`;

const ProductSecBox = styled.div`
  width: 430px;
  font-size: 14px;
  color: #333333;
  line-height: 24px;
`;

const CartButton = styled.button`
  width: 430px;
  height: 56px;
  flex-grow: 0;
  border-radius: 3px;
  background-color: #5f0080;
  color: white;
  font-weight: bold;
  border: none;
  margin: 0px 20px;
`;

const MiniButton = styled.button`
  width: 56px;
  height: 56px;
  border: 0.7px solid #dddddd;
  border-radius: 3px;
  margin: 0px 3.25px;
  background: white;
`;

const CountButton = styled.button`
  width: 30px;
  height: 30px;
  border: solid #dddddd;
  border-width: 1.5px;
  font-size: 30px;
  background-color: white;
  color: #dddddd;
  line-height: 20px;
  text-align: center;
`;

const ProductDetail = () => {
  const [heartHover, setHeartHover] = useState(false);
  const [bellHover, setBellHover] = useState(false);

  let linkHeartStyle;
  let linkBellStyle;

  const heartToggleHover = () => {
    setHeartHover(!heartHover);
  };

  const bellToggleHover = () => {
    setBellHover(!bellHover);
  };

  if (heartHover) {
    linkHeartStyle = { width: "30px", height: "30px", color: "#5f0080" };
  } else {
    linkHeartStyle = { width: "30px", height: "30px", color: "#cccccc" };
  }

  if (bellHover) {
    linkBellStyle = { width: "30px", height: "30px", color: "#5f0080" };
  } else {
    linkBellStyle = { width: "30px", height: "30px", color: "#cccccc" };
  }

  const [count, setCount] = useState(1);

  const onMinus = () => {
    if (count <= 1) {
    } else {
      setCount(count - 1);
    }
  };

  const onPlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div
        style={{
          width: "1050px",
          margin: "80px auto 0px auto",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "495px",
              height: "515px",
            }}
          >
            <div
              style={{
                width: "435px",
                height: "500px",
                backgroundColor: "yellow",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "555px",
              marginBottom: "200px",
            }}
          >
            <ProductBox
              style={{
                color: "#999999",
                fontSize: "14px",
                margin: "0px 0px 20px 0px",
              }}
            >
              샛별 배송
            </ProductBox>
            <ProductBox
              style={{
                color: "#333333",
                fontSize: "25px",
                margin: "0px 0px 20px 0px",
                fontWeight: "bold",
              }}
            >
              [모두의맛집] 샤오짠 탄탄면
            </ProductBox>
            <ProductBox
              style={{
                color: "#B5B5B5",
                fontSize: "14px",
                margin: "0px 0px 20px 0px",
              }}
            >
              면류
            </ProductBox>
            <ProductBox style={{ margin: "0px 0px 35px 0px" }}>
              <span
                style={{
                  color: "#333333",
                  fontSize: "37px",
                  fontWeight: "bold",
                }}
              >
                8,800
              </span>
              &nbsp; &nbsp;
              <span
                style={{
                  color: "#333333",
                  fontSize: "26px",
                }}
              >
                원
              </span>
            </ProductBox>
            <ProductBox
              style={{
                color: "#5f0080",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0px 0px 40px 0px",
              }}
            >
              로그인 후, 적립 혜택이 제공됩니다
            </ProductBox>
            <ProductBox
              style={{
                display: "flex",
                wrap: "wrap",
                margin: "0px 0px 15px 0px",
              }}
            >
              <ProductMiniBox>배송</ProductMiniBox>
              <ProductSecBox>
                <div>샛별 배송</div>
                <div>
                  23시 전주문 시 내일아침 7시 전 도착
                  <br />
                  (대구 부산 울산 샛별배송 운영시간별도 확인)
                </div>
              </ProductSecBox>
            </ProductBox>
            <ProductBox
              style={{
                display: "flex",
                wrap: "wrap",
                margin: "0px 0px 15px 0px",
              }}
            >
              <ProductMiniBox>상품 설명</ProductMiniBox>
              <ProductSecBox>
                전국의 맛집을 모아 가정의 식탁위에 펼쳐내는 브랜드, 모두의
                맛집을 만나보세요. 이번에는 대만 로컬 푸드를 캐주얼하게 재해석해
                선보이는 샤오짠의 대표메뉴, 탄탄면을 준비했어요. 땅콩소스와
                돼지고기를 넉넉히 넣어 묵직한 국물 맛이 특징인데요. 여기에
                아삭한 청경채까지 더해지니 풍성함이 배가 되었답니다. 생면을
                사용해서 국물이 골고루 배어드는 것은 물론, 더욱 쫄깃하게 즐길 수
                있지요. 간단한 조리만 거치면 긴 줄을 기다릴 필요 없이 매장의 맛
                그대로 즐길 수 있을 거에요.
              </ProductSecBox>
            </ProductBox>
            <ProductBox style={{ display: "flex", wrap: "wrap" }}>
              <ProductMiniBox>구매 수량</ProductMiniBox>
              <ProductSecBox>
                <CountButton onClick={onMinus} style={{ marginRight: "25px" }}>
                  -
                </CountButton>
                <span style={{ fontSize: "25px", color: "#333333" }}>
                  {count}
                </span>
                <CountButton onClick={onPlus} style={{ marginLeft: "25px" }}>
                  +
                </CountButton>
              </ProductSecBox>
            </ProductBox>
            <ProductBox style={{ display: "flex", wrap: "wrap" }}>
              <ProductMiniBox></ProductMiniBox>
              <ProductSecBox>
                <div style={{ width: "430px", height: "50px" }}></div>
                <div style={{ textAlign: "right", color: "#333333" }}>
                  <span style={{ fontSize: "15px" }}>총상품금액:</span>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <span
                    style={{
                      color: "#333333",
                      fontSize: "37px",
                      fontWeight: "bold",
                    }}
                  >
                    8,800
                  </span>
                  <span
                    style={{
                      color: "#333333",
                      fontSize: "26px",
                    }}
                  >
                    원
                  </span>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#666666",
                    margin: "15px 0px",
                  }}
                >
                  로그인 후, 적립혜택 제공
                </div>
              </ProductSecBox>
            </ProductBox>
            <ProductBox style={{ display: "flex", wrap: "wrap" }}>
              <MiniButton>
                <BsHeart
                  style={linkHeartStyle}
                  onMouseEnter={heartToggleHover}
                  onMouseLeave={heartToggleHover}
                />
              </MiniButton>
              <MiniButton>
                <VscBell
                  style={linkBellStyle}
                  onMouseEnter={bellToggleHover}
                  onMouseLeave={bellToggleHover}
                />
              </MiniButton>
              <CartButton>장바구니 담기</CartButton>
            </ProductBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;