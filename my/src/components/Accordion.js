import Accordion from 'react-bootstrap/Accordion';
import { CopyToClipboard } from "react-copy-to-clipboard";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>신랑측</Accordion.Header>
        <Accordion.Body>
          <ul className='detail-list'>
            <li>
              <div>
                <span>
                  <em>신랑</em><b>한대웅</b>
                </span>              
                <p>
                  우리은행
                  <i>1002-349-014568</i>
                </p>                
              </div>
              <CopyToClipboard
                text="1002-349-014568"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
            <li>
              <div>
                <span>
                  <em>아버지</em><b>한덕규</b>
                </span>              
                <p>
                  하나은행
                  <i>220-910311-68107</i>
                </p>                
              </div>
              <CopyToClipboard
                text="220-910311-68107"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
            <li>
              <div>
                <span>
                  <em>어머니</em><b>백춘희</b>
                </span>              
                <p>
                  우리은행
                  <i>1000-000-000000</i>
                </p>                
              </div>
              <CopyToClipboard
                text="1000-000-000000"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>신부측</Accordion.Header>
        <Accordion.Body>
        <ul className='detail-list'>
            <li>
              <div>
                <span>
                  <em>신부</em><b>왕시은</b>
                </span>              
                <p>
                  우리은행
                  <i>1002-840-962254</i>
                </p>                
              </div>
              <CopyToClipboard
                text="1002-840-962254"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
            <li>
              <div>
                <span>
                  <em>아버지</em><b>왕춘구</b>
                </span>              
                <p>
                  우리은행
                  <i>1000-000-000000</i>
                </p>                
              </div>
              <CopyToClipboard
                text="1000-000-000000"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
            <li>
              <div>
                <span>
                  <em>어머니</em><b>최선옥</b>
                </span>              
                <p>
                  신한은행
                  <i>110-286-573867</i>
                </p>                
              </div>
              <CopyToClipboard
                text="110-286-573867"
                onCopy={() => alert("계좌번호가 복사되었습니다.")}
              >
                <button type='button'>계좌 복사하기</button>
              </CopyToClipboard>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;