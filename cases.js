var clipboard = require("./clipboard");

var testcases = {
  "국민은행 ㄴㄴ 국민증권 100 124 480175로 10,000원 보내줘~!": {
    instCode: "004",
    instAccount: "100124480175",
    txAmt: "10000"
  },
  "장지: 부산 장례식장\n마음을 전하실 곳: 하나은행 100-1234-5679 김케이": {
    instCode: "081",
    instAccount: "10012345679",
    txAmt: ""
  },
  "12341234123 400원": {
    instCode: "",
    instAccount: "12341234123",
    txAmt: "400"
  },
  "국민의당 김케이 1002447940859(우리)": {
    instCode: "020",
    instAccount: "1002447940859",
    txAmt: ""
  },
  "우리 1002 447 940859 2만원": {
    instCode: "020",
    instAccount: "1002447940859",
    txAmt: "20000"
  },
  "30,000 1002-447-940859(우리)" : {
    instCode: "020",
    instAccount: "1002447940859",
    txAmt: "30000"
  },
  "1002447940859 3만원 우리은행" : {
    instCode: "020",
    instAccount: "1002447940859",
    txAmt: "30000"
  }
};

var test1 = "국민은행 ㄴㄴ 국민증권 100 124 480175로 10,000원 보내줘~!";
var test2 = `장지: 부산 장례식장
            마음을 전하실 곳: 하나은행 100-1234-5679 김케이`;
var test3 = "12341234123 400원";
var test4 = "국민의당 김케이 100012312341273123(우리)";
var test5 = `장지: 부산 장례식장(소재지: 해운대 국민은행 옆, 051-8282-4444)
            마음을 전하실 곳: 하나은행 100-1234-5679 이함정`; // 국민 05162624444
var test50 = `장지: 부산 장례식장(소재지: 해운대 국민은행 옆, 051-8282-4444)
            마음을 전하실 곳: 하나은행 100-123456-56790 이함정`;
var test6 = `87840원 나한테 보내주면 돼..
            케이뱅크 100167790107 강소혜`;
var test7 = `기업 029-081822-04-039
            예금주:(주)앤드모어`;
var test8 = `[인터파크_입금요청]
            윤맑은이슬 고객님, 예매완료를 위해 입금 부탁 드립니다.
            ▶상품명: 2021 페퍼톤스 콘서트 ‘TRAVELERS’
            ▶예매번호: T1826244450 [총1장]
            ▶입금기한: 2021-11-10 (수) 23시 59분
            (은행에 따라 23시 30분이후로 온라인 입금이 제한 될 수 있습니다.)
            ▶계좌번호: 우리은행
            26109255418117
            ▶예금주: 인터파크
            ▶입금액: 111,000원
            (나의 예매내역 보기)
            http://inpk.kr/raOA`; // 예매번호
var test9 = `신랑 측 : 1002447940859(KB증권)
             신부 측 : 33312341234(카카오뱅크)`;

var test10 = `[모바일 청첩장]
              장소: 더케이호텔 블루밍홀(국민은행 사거리 인근)
              신랑 측 : 1002447940859(KB증권)
              신부 측 : 33312341234(카카오뱅크)`;
var test11 = "국민 567-7890-1234로 12000원 (김케이 010-1234-1234)";
var test12 = "우리1003447940859카카오도 가능";
var test13 = "신한은행 정제일 1002447940859"; // 제일
var test14 = "우리은행1002447940859 이하나";

var test15 = "농협 123412341234 광주청소년수련원";

var test15 = `미납 상세조회
납부: http://m.excard.co.kr
가상계좌 납부(납부기한 2018-06-05):
-농협 79001-95221-2713
-국민 84249-97831-6181
-하나 83491-06897-5372
영업소/휴게소(안내소, 무인수납기), 홈페이지(www.excard.co.kr) 납부가능`;
var test16 = "신한 1400원";

var test17 = `경매기간 : 2021 년 2 월23  일~  2월  23일  23시 까지 (경매종료시 경매종료를 해주세요)
경매품목 :난
판매자실명 :김민호
판매자주소 :전남
판매자전화 :010 3899 9109
가      격 : 경매시작 1천원 (상승가는 자율적이며,화폐 단위는 천원 또는 만원입니다)
예 금 주 :김민호
계좌번호 :새금 9002 1512 8355 1
택 배 비 : 착불(ㅇ) 선불()`;

exports.testcases = testcases;
