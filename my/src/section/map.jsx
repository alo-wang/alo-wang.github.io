import React from 'react'

import { useEffect } from 'react'
const {kakao} = window;
const {daum} = window;

function Map(props){
    // 카카오맵
    useEffect(()=>{
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center : new kakao.maps.LatLng(37.538520853137285, 127.1224598092004), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        var markerPosition  = new kakao.maps.LatLng(37.538520853137285, 127.1224598092004); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    },[])

    return(
        <section className="section_map">        
            <h2>오시는 길</h2>
            <div id="map"></div>

            <div className="directions-list">
                <h3>주소</h3>
                <p>라비니움 서울특별시 송파구 천호대로 996</p>
                
                <h3>지하철 이용시</h3>
                <p>
                    <span className='bullet'>5호선</span>
                    <span className='bullet'>8호선<b> 천호역 10번 출구</b>바로 앞</span>
                </p>

                <h3>버스 이용시</h3>
                <p><b>천호역 또는 천호사거리 하차</b></p>
                <ul>
                    <li>
                        <b>간선</b> 130, 340, 341, 342, 370
                    </li>
                    <li>
                        <b>지선</b> 3214, 3316, 3318, 3321, 3411, 4318
                    </li>
                    <li>
                        <b>일반</b> 1-4, 13, 13-2, 16, 23, 30, 30-3, 112-1, 112-5
                    </li>
                    <li>
                        <b>좌석</b> 1113, 1113,-1, 1113-2, 1113-10, 1113-11, 3500
                    </li>
                    <li>
                        <b>마을</b> 강동 05
                    </li>
                    <li>
                        <b>공항</b> 6200
                    </li>
                </ul>

                <h3>공영주차장 안내</h3>
                <p>
                    <b>네비게이션 주소검색</b>
                    <span>서울시 강동구 성내동 57-12</span><br/>
                    천호역 6번 출구 앞 / 천호역 공영주차장 지하 1, 2층
                    <i>(1시간 30분 무료 / 본관 1층 무료주차권 발급)</i>
                </p>

                <h3>주차 위치</h3>
                <p>기둥번호 A, B, C, D 20-60번 사이 주차</p>
            </div>


        </section>
    );
}

export default Map;