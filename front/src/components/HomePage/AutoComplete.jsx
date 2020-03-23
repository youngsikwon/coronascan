import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function ReactAutoComplete() {
  return (
    <Autocomplete
      id="country-list"
      options={countryList}
      getOptionLabel={options => options}
      renderInput={params => <TextField {...params} label="입국을 원하는 지역, 국가를 입력해주세요" variant="outlined" />}
    />
  );
}

export default ReactAutoComplete;

const countryList = [
  "모든 국가",
  "가나",
  "가봉",
  "가이아나",
  "감비아",
  "건지섬",
  "과들루프",
  "과테말라",
  "괌",
  "그레나다",
  "그리스",
  "그린란드",
  "기니",
  "기니비사우",
  "나미비아",
  "나우루",
  "나이지리아",
  "남극",
  "남수단",
  "남아프리카 공화국",
  "네덜란드",
  "네팔",
  "노르웨이",
  "노퍽섬",
  "누벨칼레도니",
  "뉴질랜드",
  "니우에",
  "니제르",
  "니카라과",
  "대만",
  "대한민국",
  "덴마크",
  "도미니카 공화국",
  "도미니카 연방",
  "동티모르",
  "독일",
  "라오스",
  "라이베리아",
  "라트비아",
  "러시아",
  "레소토",
  "레바논",
  "레위니옹",
  "루마니아",
  "룩셈부르크",
  "르완다",
  "리비아",
  "리투아니아",
  "리히텐슈타인",
  "마다가스카르",
  "마르티니크",
  "마셜제도",
  "마이크로 네시아",
  "마요트",
  "마카오",
  "말라위",
  "말레이시아",
  "말리",
  "맨섬",
  "멕시코",
  "모나코",
  "모로코",
  "모리셔스",
  "모리타니아",
  "모잠비크",
  "몬테네그로",
  "몬트세랫",
  "몰도바",
  "몰디브",
  "몰타",
  "몽골",
  "미국",
  "미국령 군소 제도",
  "미국령 버진아일랜드",
  "미얀마",
  "민주콩고",
  "미크로네시아 연방",
  "바누아투",
  "바레인",
  "바베이도스",
  "바티칸 시국",
  "바하마",
  "방글라데시",
  "버뮤다",
  "베냉",
  "베네수엘라",
  "베트남",
  "벨기에",
  "벨라루스",
  "벨리즈",
  "보네르섬",
  "보스니아 헤르체고비나",
  "보츠와나",
  "볼리비아",
  "부룬디",
  "부르키나파소",
  "부베섬",
  "부탄",
  "북마리아나 제도",
  "북마케도니아",
  "불가리아",
  "브라질",
  "브루나이",
  "사모아",
  "사모아 (미국령)",
  "사우디",
  "사이프러스",
  "사우스조지칸 사우스샌드위치 제도",
  "산마리노",
  "상투메프린시페",
  "생마르탱",
  "생바르텔레미",
  "생피에르 미클롱",
  "서사하라",
  "세네갈",
  "세르비아",
  "세이셸",
  "세인트루시아",
  "세인트빈센트 그레나딘",
  "세인트키츠 네비스",
  "세인트헬레나",
  "소말리아",
  "솔로몬제도",
  "수단",
  "수리남",
  "스리랑카",
  "스발바르 얀마옌",
  "스웨덴",
  "스위스",
  "스페인",
  "슬로바키아",
  "슬로베니아",
  "시리아",
  "시에라리온",
  "신트마르턴",
  "싱가포르",
  "아랍에미리트",
  "아루바",
  "아르메니아",
  "아르헨티나",
  "아이슬란드",
  "아이티",
  "아일랜드",
  "아제르바이잔",
  "아프가니스탄",
  "안도라",
  "알바니아",
  "알제리",
  "앙골라",
  "앤티가바부다",
  "앵귈라",
  "에리트리아",
  "에스와티니",
  "에스토니아",
  "에콰도르",
  "에티오피아",
  "엘살바도르",
  "영국",
  "영국령 버진아일랜드",
  "영국령 인도양 지역",
  "예멘",
  "오만",
  "오스트리아",
  "온두라스",
  "올란드 제도",
  "왈리스 푸투나",
  "요르단",
  "우간다",
  "우루과이",
  "우즈베키스탄",
  "우크라이나",
  "이라크",
  "쿠르드지방정부",
  "이란",
  "이스라엘",
  "이집트",
  "이탈리아",
  "인도",
  "인도네시아",
  "일본",
  "자메이카",
  "잠비아",
  "저지섬",
  "적도 기니",
  "조선민주주의인민공화국",
  "조지아",
  "중국",
  "중국, 간쑤성",
  "중국, 광둥성",
  "중국, 광시좡족 자치구",
  "중국, 구이저우성",
  "중국, 네이멍구 자치구",
  "중국, 닝샤후이족 자치구",
  "중국, 랴오닝성",
  "중국, 베이징시",
  "중국, 산둥성",
  "중국, 산시성 (陝西省)",
  "중국, 상하이시",
  "중국, 신장위구르 자치구",
  "중국, 쓰촨성",
  "중국, 윈난성",
  "중국, 장쑤성",
  "중국, 저장성",
  "중국, 지린성",
  "중국, 충칭시",
  "중국, 톈진시",
  "중국, 푸젠성",
  "중국, 하이난성",
  "중국, 허난성",
  "중국, 허베이성",
  "중국, 헤이룽장성",
  "중국, 후난성",
  "중국, 후베이성",
  "중앙아프리카 공화국",
  "중화민국",
  "지부티",
  "지브롤터",
  "짐바브웨",
  "차드",
  "체코",
  "칠레",
  "카메룬",
  "카보베르데",
  "카자흐스탄",
  "카타르",
  "캄보디아",
  "캐나다",
  "케냐",
  "케이맨 제도",
  "코모로",
  "코스타리카",
  "코코스 제도",
  "코트디부아르",
  "콜롬비아",
  "콩고공화국",
  "쿠바",
  "쿠웨이트",
  "쿡제도",
  "퀴라소",
  "크로아티아",
  "크리스마스섬",
  "키르기스스탄",
  "키리바시",
  "키프로스",
  "타지키스탄",
  "탄자니아",
  "태국",
  "터크스 케이커스 제도",
  "터키",
  "토고",
  "토켈라우",
  "통가",
  "투르크 메니스탄",
  "투발루",
  "튀니지",
  "트리니다드 토바고",
  "파나마",
  "파라과이",
  "파키스탄",
  "파푸아뉴기니",
  "팔라우",
  "팔레스타인",
  "페로 제도",
  "페루",
  "포르투갈",
  "포클랜드 제도",
  "폴란드",
  "푸에르토리코",
  "프랑스",
  "프랑스령 기아나",
  "프랑스령 남방 및 남극",
  "폴리네시아 (프랑스령)",
  "피지",
  "핀란드",
  "필리핀",
  "핏케언 제도",
  "허드 맥도널드 제도",
  "헝가리",
  "호주",
  "홍콩"
]
