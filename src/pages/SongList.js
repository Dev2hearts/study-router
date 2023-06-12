import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SongList = ({ songs }) => {
    const list = songs.map((item) => {
        // return () 는 JSX 로 html 만들려고 한다는 의도
        return (
            <li className="list-group-item" key={item.id}>
                <Link to={`/songs/${item.id}`} style={{ textDecoration: "none" }}>
                    {item.title} {item.musician}
                    {/* font-awsome */}
                    <span className="float-end badge bg-secondary">
                        <i className="fa fa-play"></i>
                    </span>
                </Link>
            </li>
        );
    });

    return (
        <div className="card card-body">
            <h2>SongList</h2>
            <ul className="list-group">{list}</ul>
            {/* 중첩된 Route 표현 : context 활용*/}
            <Outlet context={{ songs }} />
        </div>
    );
};

export default SongList;
