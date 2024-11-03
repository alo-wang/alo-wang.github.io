import React from 'react'
import AccordionCall from '../components/Accordion_call'
import icoCall from '../img/ico-call.svg'
import icoMsg from '../img/ico-msg.svg'

function Call(props){
    // 신랑
    const handleCallH = () => {
    window.location.href = 'tel:010-4925-1112';
    };
    const handleSmsH = () => {
    window.location.href = 'sms:010-4925-1112';
    };

    // 신부
    const handleCallW = () => {
    window.location.href = 'tel:010-6421-5575';
    };
    const handleSmsW = () => {
    window.location.href = 'sms:010-6421-5575';
    };

    return(
        <section className="section_call">        
            <h2>연락처</h2>

            <div className='bg'>
                <div className='top-box'>
                    <div>
                        <span className='tit'>
                            <em>신랑</em><b>한대웅</b>
                        </span>
                        <button type='button' className='btn-ico' onClick={handleCallH}>
                            <img src={icoCall} alt="전화걸기 아이콘"></img>
                        </button>
                        <button type='button' className='btn-ico' onClick={handleSmsH}>
                            <img src={icoMsg} alt="메세지 아이콘"></img>
                        </button>
                    </div>
                    <div>
                        <span className='tit'>
                            <em>신부</em><b>왕시은</b>
                        </span>
                        <button type='button' className='btn-ico' onClick={handleCallW}>
                            <img src={icoCall} alt="전화걸기 아이콘"></img>
                        </button>
                        <button type='button' className='btn-ico' onClick={handleSmsW}>
                            <img src={icoMsg} alt="메세지 아이콘"></img>
                        </button>
                    </div>
                </div>
                <AccordionCall />
            </div>

        </section>
    );
}

export default Call;