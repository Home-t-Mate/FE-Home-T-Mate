import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useWindowSize from "../hooks/useWindowSize.js";

export default function Privacy() {
  const size = useWindowSize();
  const { width, height } = size;
  React.useEffect(() => {
    return () => {};
  }, []);

  if (width < height) {
    return (
      <>
        <Container maxWidth="lg">
          <Box sx={{ width: "100%", maxWidth: 1200, mb: 16 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold", mt: 12 }}
            >
              개인정보보호방침
            </Typography>
            <br />
            <Typography variant="subtitle1" gutterBottom component="div">
              <strong>
                1. 개인정보의 처리 목적 (‘https://hometmate.com’이하
                '홈트메이트')
              </strong>
              은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의
              목적 이외의 용도로는 이용하지 않습니다.
              <br /> <br />- 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른
              본인 식별.인증,
              <br /> 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제,
              물품 또는 서비스의 공급.배송 등
            </Typography>
            <br />
            <Typography variant="subtitle1" gutterBottom component="div">
              <strong> 2. 개인정보의 처리 및 보유 기간 </strong>
              <br /> <br />
              ① (‘https://hometmate.com’이하 '홈트메이트') 은(는) 정보주체로부터
              개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에
              따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
              <br />② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <br />
              <br /> ☞ 아래 예시를 참고하여 개인정보 처리업무와 개인정보
              처리업무에 대한 보유기간 및 관련 법령, 근거 등을 기재합니다.{" "}
              <br />
              (예시)- 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입
              해지시까지,
              <br />
              다만 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지 -
              전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 : 5년
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong> 3. 개인정보의 제3자 제공에 관한 사항</strong>
              <br /> <br />
              ① ('https://hometmate.com'이하 '홈트메이트')은(는) 정보주체의
              동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에
              해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              <br />② ('https://hometmate.com')은(는) 다음과 같이 개인정보를
              제3자에게 제공하고 있습니다.
              <br />
              <br /> - 개인정보를 제공받는 자 : act99
              <br />
              - 제공받는 자의 개인정보 이용목적 : 카메라 사용
              <br />- 제공받는 자의 보유.이용기간: 사진은 지체없이 파기/기능
              허가는 이용기간동안
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>4. 개인정보처리 위탁</strong>
              <br /> <br />
              ① ('홈트메이트')은(는) 원활한 개인정보 업무처리를 위하여 다음과
              같이 개인정보 처리업무를 위탁하고 있습니다.
              <br />
              <br />
              - 위탁받는 자 (수탁자) : 이주석
              <br />
              - 위탁하는 업무의 내용 : 카메라 사용 허가
              <br />- 위탁기간 : 사진은 지체없이 파기/기능 허가는 이용기간동안
              <br />② ('https://hometmate.com'이하 '홈트메이트')은(는) 위탁계약
              체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보
              처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
              관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
              명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
              있습니다.
              <br />③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
              개인정보 처리방침을 통하여 공개하도록 하겠습니다.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>
                5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
                개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
              </strong>
              <br /> <br />
              ① 정보주체는 Act99(‘https://hometmate.com’이하 ‘홈트메이트) 에
              대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수
              있습니다.
              <br />
              <br />
              1. 개인정보 열람요구
              <br />
              2. 오류 등이 있을 경우 정정 요구
              <br />
              3. 삭제요구
              <br />
              4. 처리정지 요구
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>6. 처리하는 개인정보의 항목 작성</strong>
              <br /> <br />
              ① ('https://hometmate.com'이하 '홈트메이트')은(는) 다음의 개인정보
              항목을 처리하고 있습니다.
              <br />
              <br />
              - 웹 이용에 필요한 카메라 사용 허가
              <br />
              - 필수항목 : 카메라 사용 허가, 오디오 사용 허가
              <br />- 선택항목
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>
                7. 개인정보의 파기('홈트메이트')은(는) 원칙적으로 개인정보
                처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
                파기의 절차, 기한 및 방법은 다음과 같습니다.
              </strong>
              <br /> <br />
              -파기절차 이용자가 입력한 정보는 목적 달성 후 별도의 DB에
              옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라
              일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진
              개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지
              않습니다.
              <br />
              -파기기한 이용자의 개인정보는 개인정보의 보유기간이 경과된
              경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적
              달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게
              되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터
              5일 이내에 그 개인정보를 파기합니다.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>
                8. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
              </strong>
              <br /> <br />
              Act99 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를
              사용하지 않습니다.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong> 9. 개인정보 보호책임자 작성</strong>
              <br /> <br />
              ① Act99(‘https://hometmate.com’이하 ‘홈트메이트) 은(는) 개인정보
              처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
              보호책임자를 지정하고 있습니다.
              <br />
              ▶ 개인정보 보호책임자
              <br />
              - 성명 :이주석
              <br />
              - 직책 :개발
              <br />
              - 연락처 :01062948233, dorxm999@gmail.com, 07047998233
              <br />
              <br />
              ※ 개인정보 보호 담당부서로 연결됩니다.
              <br />
              ▶ 개인정보 보호 담당부서
              <br />
              부서명 :개발
              <br />
              담당자 :이주석
              <br />
              연락처 :01062948233, dorxm999@gmail.com, 07047998233
              <br />
              <br />
              ② 정보주체께서는 Act99(‘https://hometmate.com’이하 ‘홈트메이트) 의
              서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
              문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
              담당부서로 문의하실 수 있습니다.
              <br />
              Act99(‘https://hometmate.com’이하 '홈트메이트') 은(는) 정보주체의
              문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>10. 개인정보 처리방침 변경</strong>
              <br /> <br />
              ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <br />
              <strong>
                11. 개인정보의 안전성 확보 조치 ('홈트메이트')은(는)
                개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한
                기술적/관리적 및 물리적 조치를 하고 있습니다.
              </strong>
              <br /> <br />
              1. 정기적인 자체 감사 실시
              <br />
              개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
              감사를 실시하고 있습니다.
              <br />
              2. 내부관리계획의 수립 및 시행
              <br />
              개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고
              있습니다.
            </Typography>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%", maxWidth: 1200, mb: 16 }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", mt: 12 }}
          >
            개인정보보호방침
          </Typography>
          <br />
          <Typography variant="subtitle1" gutterBottom component="div">
            <strong>
              1. 개인정보의 처리 목적 (‘https://hometmate.com’이하 '홈트메이트')
            </strong>
            은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, <br />
            다음의 목적 이외의 용도로는 이용하지 않습니다.
            <br /> <br />- 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른
            본인 식별.인증,
            <br /> 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제,
            물품 또는 서비스의 공급.배송 등
          </Typography>
          <br />
          <Typography variant="subtitle1" gutterBottom component="div">
            <strong> 2. 개인정보의 처리 및 보유 기간 </strong>
            <br /> <br />
            ① (‘https://hometmate.com’이하 '홈트메이트') 은(는) 정보주체로부터
            개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에
            따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
            <br />② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
            <br />
            <br /> ☞ 아래 예시를 참고하여 개인정보 처리업무와 개인정보
            처리업무에 대한 보유기간 및 관련 법령, 근거 등을 기재합니다. <br />
            (예시)- 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입
            해지시까지,
            <br />
            다만 채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지 -
            전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 : 5년
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong> 3. 개인정보의 제3자 제공에 관한 사항</strong>
            <br /> <br />
            ① ('https://hometmate.com'이하 '홈트메이트')은(는) 정보주체의 동의,
            법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는
            경우에만 개인정보를 제3자에게 제공합니다.
            <br />② ('https://hometmate.com')은(는) 다음과 같이 개인정보를
            제3자에게 제공하고 있습니다.
            <br />
            <br /> - 개인정보를 제공받는 자 : act99
            <br />
            - 제공받는 자의 개인정보 이용목적 : 카메라 사용
            <br />- 제공받는 자의 보유.이용기간: 사진은 지체없이 파기/기능
            허가는 이용기간동안
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>4. 개인정보처리 위탁</strong>
            <br /> <br />
            ① ('홈트메이트')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이
            개인정보 처리업무를 위탁하고 있습니다.
            <br />
            <br />
            - 위탁받는 자 (수탁자) : 이주석
            <br />
            - 위탁하는 업무의 내용 : 카메라 사용 허가
            <br />- 위탁기간 : 사진은 지체없이 파기/기능 허가는 이용기간동안
            <br />② ('https://hometmate.com'이하 '홈트메이트')은(는) 위탁계약
            체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보
            처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
            관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,
            수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
            <br />③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
            개인정보 처리방침을 통하여 공개하도록 하겠습니다.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>
              5. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
              개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
            </strong>
            <br /> <br />
            ① 정보주체는 Act99(‘https://hometmate.com’이하 ‘홈트메이트) 에 대해
            언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            <br />
            <br />
            1. 개인정보 열람요구
            <br />
            2. 오류 등이 있을 경우 정정 요구
            <br />
            3. 삭제요구
            <br />
            4. 처리정지 요구
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>6. 처리하는 개인정보의 항목 작성</strong>
            <br /> <br />
            ① ('https://hometmate.com'이하 '홈트메이트')은(는) 다음의 개인정보
            항목을 처리하고 있습니다.
            <br />
            <br />
            - 웹 이용에 필요한 카메라 사용 허가
            <br />
            - 필수항목 : 카메라 사용 허가, 오디오 사용 허가
            <br />- 선택항목
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>
              7. 개인정보의 파기('홈트메이트')은(는) 원칙적으로 개인정보
              처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
              파기의 절차, 기한 및 방법은 다음과 같습니다.
            </strong>
            <br /> <br />
            -파기절차 이용자가 입력한 정보는 목적 달성 후 별도의 DB에
            옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라
            일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진
            개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지
            않습니다.
            <br />
            -파기기한 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
            보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당
            서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는
            개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그
            개인정보를 파기합니다.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>
              8. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
            </strong>
            <br /> <br />
            Act99 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를
            사용하지 않습니다.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong> 9. 개인정보 보호책임자 작성</strong>
            <br /> <br />
            ① Act99(‘https://hometmate.com’이하 ‘홈트메이트) 은(는) 개인정보
            처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
            보호책임자를 지정하고 있습니다.
            <br />
            ▶ 개인정보 보호책임자
            <br />
            - 성명 :이주석
            <br />
            - 직책 :개발
            <br />
            - 연락처 :01062948233, dorxm999@gmail.com, 07047998233
            <br />
            <br />
            ※ 개인정보 보호 담당부서로 연결됩니다.
            <br />
            ▶ 개인정보 보호 담당부서
            <br />
            부서명 :개발
            <br />
            담당자 :이주석
            <br />
            연락처 :01062948233, dorxm999@gmail.com, 07047998233
            <br />
            <br />
            ② 정보주체께서는 Act99(‘https://hometmate.com’이하 ‘홈트메이트) 의
            서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
            문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
            담당부서로 문의하실 수 있습니다.
            <br />
            Act99(‘https://hometmate.com’이하 '홈트메이트') 은(는) 정보주체의
            문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>10. 개인정보 처리방침 변경</strong>
            <br /> <br />
            ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
            전부터 공지사항을 통하여 고지할 것입니다.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <br />
            <strong>
              11. 개인정보의 안전성 확보 조치 ('홈트메이트')은(는)
              개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한
              기술적/관리적 및 물리적 조치를 하고 있습니다.
            </strong>
            <br /> <br />
            1. 정기적인 자체 감사 실시
            <br />
            개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
            감사를 실시하고 있습니다.
            <br />
            2. 내부관리계획의 수립 및 시행
            <br />
            개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고
            있습니다.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
