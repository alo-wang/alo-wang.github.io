import React from 'react'
// import {Linking} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import icoCall from '../img/ico-call.svg'
import icoMsg from '../img/ico-msg.svg'

function BasicExample() {
  // 시아버지
  const handleCallHf = () => {
    window.location.href = 'tel:010-5247-1136';
  };
  const handleSmsHf = () => {
    window.location.href = 'sms:010-5247-1136';
  };

  // 시어머니
  const handleCallHm = () => {
    window.location.href = 'tel:010-7619-1136';
  };
  const handleSmsHm = () => {
    window.location.href = 'sms:010-7619-1136';
  };

  // 친정아버지
  const handleCallWf = () => {
    window.location.href = 'tel:010-4711-5572';
  };
  const handleSmsWf = () => {
    window.location.href = 'sms:010-4711-5572';
  };

  // 친정어머니
  const handleCallWm = () => {
    window.location.href = 'tel:010-2213-5575';
  };
  const handleSmsWm = () => {
    window.location.href = 'sms:010-2213-5575';
  };


  return (
    <Accordion defaultActiveKey="0" className='typeBg'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className='tit'>
              <em>신랑 측 혼주</em>
          </span>
          <span className='tit'>
              <em>신부 측 혼주</em>
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className='box'>
            <div>
              <span className='tit row'>
                  <em>아버지</em><b>한덕규</b>
              </span>
              <button type='button' className='btn-ico' onClick={handleCallHf}>
                  <img src={icoCall} alt="전화걸기 아이콘"></img>
              </button>
              <button type='button' className='btn-ico' onClick={handleSmsHf}>
                  <img src={icoMsg} alt="메세지 아이콘"></img>
              </button>
            </div>

            <div>
              <span className='tit row'>
                  <em>아버지</em><b>왕춘구</b>
              </span>
              <button type='button' className='btn-ico' onClick={handleCallWf}>
                  <img src={icoCall} alt="전화걸기 아이콘"></img>
              </button>
              <button type='button' className='btn-ico' onClick={handleSmsWf}>
                  <img src={icoMsg} alt="메세지 아이콘"></img>
              </button>
            </div>
          </div>

          <div className='box'>
            <div>
              <span className='tit row'>
                  <em>어머니</em><b>백춘희</b>
              </span>
              <button type='button' className='btn-ico' onClick={handleCallHm}>
                  <img src={icoCall} alt="전화걸기 아이콘"></img>
              </button>
              <button type='button' className='btn-ico' onClick={handleSmsHm}>
                  <img src={icoMsg} alt="메세지 아이콘"></img>
              </button>
            </div>

            <div>
              <span className='tit row'>
                  <em>어머니</em><b>최선옥</b>
              </span>
              <button type='button' className='btn-ico' onClick={handleCallWm}>
                  <img src={icoCall} alt="전화걸기 아이콘"></img>
              </button>
              <button type='button' className='btn-ico' onClick={handleSmsWm}>
                  <img src={icoMsg} alt="메세지 아이콘"></img>
              </button>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;