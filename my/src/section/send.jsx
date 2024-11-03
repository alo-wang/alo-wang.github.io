import React from 'react'
import Accordion from '../components/Accordion'

function Send(props){
    return(
        <section className="section_send">        
            <h2>마음 전하기</h2>
            <p>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다<br/>너그러운 마음으로 양해 부탁드립니다</p>
            <Accordion />
        </section>
    );
}

export default Send;