import React from 'react'
import youngImgW from '../img/img-greeting-wang.png'
import youngImgH from '../img/img-greeting-han.png'
import familyImgW01 from '../img/img-wang-01.png'
import familyImgW02 from '../img/img-wang-02.png'
import familyImgH01 from '../img/img-han-01.png'
import familyImgH02 from '../img/img-han-02.png'
import familyImgH03 from '../img/img-han-03.png'
import familyImgU01 from '../img/img-us-01.png'
import familyImgU02 from '../img/img-us-02.png'

function Greeting(props){
    return(
        <section className="section_greeting">        
            <h2>초대합니다.</h2>
            <div className="greeting-top">
                <div>
                    <figure>
                        <img src={youngImgH} alt="어린시절 대웅의 모습"></img>
                    </figure>
                    <figure>
                        <img src={youngImgW} alt="어린시절 시은의 모습"></img>
                    </figure>

                </div>
                <p>
                    서로 다른 당신과 내가 만나<br/>
                    우리가 되었음을 
                    <br/><br/>
                    보통의<br/>
                    흘러가는 하루가 쌓여<br/>
                    소중한 나날이 이어지기를
                    <br/><br/>
                    그냥 그렇게<br/>
                    보내기를
                </p>
            </div>

            <div className="greeting-mid">
                <div className="container">
                    <figure className='item-01'>
                        <figcaption><b>춘구, 선옥</b><br/>가족이 되다.</figcaption>
                        <img src={familyImgW01} alt="춘구와 선옥의 결혼식 모습"></img>
                    </figure>
                    <figure className='item-02'>
                        <figcaption><b>덕규, 춘희</b><br/>가족이 되다.</figcaption>
                        <img src={familyImgH01} alt="덕규와 춘희의 결혼식 모습"></img>
                    </figure>

                    <figure className='item-03'>
                            <img src={familyImgH02} alt="어린시절 대웅과 지민이 어깨동무하는 모습"></img>
                    </figure>
                    <figure className='item-04'>
                        <img src={familyImgW02} alt="어린시절 보행기타는 영인과 누워있는 춘구와 그위에 목마를 타는 시은의 모습"></img>
                    </figure>
                    <figure className='item-05'>
                        <img src={familyImgH03} alt="어린시절 대웅의 환하게 웃는 모습"></img>
                    </figure>
                    
                    <p className="item-txt">
                        가족이 만나<br/>가족이 되다.
                    </p>

                    <figure className='item-06'>
                        <img src={familyImgU01} alt="쥬스를 마시는 시은과 커피를 마시는 대웅의 모습"></img>
                    </figure>
                    <p className="btm-txt">
                        <b>2024.12.08</b>
                        대웅<em>&</em> 시은<br/>
                        <span>가족이 되다.</span>
                    </p>
                    <figure className="item-07">
                        <img src={familyImgU02} alt="다정하게 포즈를 취하는 4컷 사진의 대웅과 시은의 모습"></img>
                    </figure>
                    <p className="btm-txt-final">
                        축하해주신 모든분들께<br/>감사드립니다.
                    </p>
                   <span className="mid-line"></span>
                </div>
            </div>
        </section>
    );
}

export default Greeting;