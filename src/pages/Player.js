import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import Youtube from "react-youtube";
const Player = () => {
    const { songs } = useOutletContext();
    const navigate = useNavigate();
    // useParams 에 담긴 값은 무조건 문자열입니다.
    // usePrams   "1" !== 1
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    // 데이터를 가지고 와서 셋팅한다. 1번만
    useEffect(() => {
        const song = songs.find((item) => item.id === parseInt(id));

        if (song) {
            setTitle(song.title);
            setYoutubeLink(song.youtube_link);
        } else {
            alert("자료가 없습니다.");
            navigate("/songs");
        }
    }, []);

    return (
        <div className="modal modal-sheet d-block p-4 py-md-5">
            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header border-bottom-0">
                        <h1 className="modal-title fs-5">{title}</h1>
                        <Link to="/songs" type="button" className="btn-close"></Link>
                    </div>
                    <div className="modal-body py-0 pb-3">
                        {/* react-youtube 라이브러리 활용 */}
                        <Youtube videoId={youtubeLink} opts={{ width: "100%", playerVars: { autoplay: 1 } }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
