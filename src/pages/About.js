import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const About = ({ title }) => {
    // 웹브라우저의 router를 변경하려면 useNavigate() 를 활용
    const navigate = useNavigate();

    // useSearchParmas : ?a=1&b=2 쿼리문자열 활용하기
    // useLocation : ?a=1&b=2 쿼리문자열 활용하기
    const location = useLocation();
    // const {singer, photo} = location.state;
    // console.log("주소창 객체", location.pathname);
    // console.log("주소창 객체", location.search);
    // console.log("주소창 객체", location.hash);

    // useLocation() === window.location() 객체와 같다.
    // useSearchParams() 를 이용해 수월하게 쿼리를 추출할수 있다.
    const [serachParams, setSearchParams] = useSearchParams();
    // console.log(serachParams.get("page"));
    // console.log(serachParams.get("total"));
    // 현재페이지
    const [page, setPage] = useState(1);
    useEffect(() => {
        // 문자열을 숫자로 바꾸어줌. : parseInt()
        const strPage = parseInt(serachParams.get("page"));
        // NaN !== NaN
        // isNaN(값) : NaN 인지 아닌지 검사
        // isNaN(값)의 결과가 true 라면 값이 숫자가 아니다.
        // isNaN(값)의 결과가 false 라면 값이 숫자이다.
        setPage(!isNaN(strPage) ? strPage : 1);
    }, [serachParams]);
    const goPrev = () => {
        if (page > 0) {
            // 웹브라우저의 쿼리 스트링을 변경해 보자.
            navigate(`?page=${page - 1}&total=5`);
        }
    };
    const goNext = () => {
        navigate(`?page=${page + 1}&total=5`);
    };
    // const goNaver = () => {
    //     window.open("http://www.naver.com");
    // window.location = "http://www.naver.com";
    // 아래처럼 전달하면 path 와 함께 붙는다.
    // navigate("http://www.naver.com");
    // };
    const goHome = () => {
        //     navigate("/", { state: { from: "/About" } });
        navigate("/");
    };
    return (
        <div className="card card-body">
            <h2>About {title} </h2>
            <div>
                <div className="m-2"> 현재 페이지 : {page}</div>
                <button className="btn btn-secondary m-1" onClick={goPrev}>
                    Prev
                </button>
                <button className="btn btn-secondary m-1" onClick={goNext}>
                    Next
                </button>
                {/* <button className="btn btn-danger" onClick={goNaver}>
                    네이버
                </button> */}
                <button className="btn btn-danger" onClick={goHome}>
                    Home
                </button>
            </div>
        </div>
    );
};
export default About;
