import React from 'react'
import introImg from '../img/img-intro.png'

function Intro(props){
    return(
        <section className="section_intro">
            <h1 className="highlight">대웅<b>&</b>시은<br/><span>결혼합니다</span></h1>
            <p>2024. 12. 08 · 11:10 <span>라비니움 1F 리츄얼홀</span></p>
            <img src={introImg} alt="무릎을 맞대고 앉아 정면을 보고 웃는 대웅과 시은"></img>
        </section>
    );
}

export default Intro;