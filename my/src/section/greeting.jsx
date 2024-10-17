import React from 'react'
import youngImgW from '../img/img-top-wang.png'
import youngImgH from '../img/img-top-han.png'
import familyImgW01 from '../img/img-wang-01.png'
import familyImgW02 from '../img/img-wang-02.png'
import familyImgW03 from '../img/img-wang-03.png'
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
                <figure>
                    <img src={youngImgW} alt="어린시절 시은의 모습"></img>
                </figure>
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
                <figure>
                    <img src={youngImgH} alt="어린시절 대웅의 모습"></img>
                </figure>
            </div>

            <div className="greeting-mid">
                <div className="left">
                    <p>
                        <span>
                            춘구, 선옥<br/>가족이 되다.
                        </span>
                    </p>
                    <figure>
                        <img src={familyImgW01} alt="춘구와 선옥의 결혼식 모습"></img>
                    </figure>
                    <figure>
                        <img src={familyImgW02} alt="어린시절 보행기타는 영인과 누워있는 춘구와 그위에 목마를 타는 시은의 모습"></img>
                    </figure>
                    <figure>
                        <img src={familyImgW03} alt="시은, 선옥, 춘구, 영인이 손가락 하트를 하며 정면을 바라보는 모습"></img>
                    </figure>
                </div>
                <span className="mid-line"></span>
                <div className="right">
                    <p>
                        <span>
                           덕규, 춘희<br/>가족이 되다.    
                        </span>
                    </p>
                    <figure>
                        <img src={familyImgH01} alt="덕규와 춘희의 결혼식 모습"></img>
                    </figure>
                    <figure>
                        <img src={familyImgH02} alt="어린시절 대웅과 지민이 어깨동무하는 모습"></img>
                    </figure>
                    <figure>
                        <img src={familyImgH03} alt="어린시절 대웅의 환하게 웃는 모습"></img>
                    </figure>
                </div>
            </div>
            
        </section>
    );
}

export default Greeting;