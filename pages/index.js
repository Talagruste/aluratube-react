import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .bannerPrincipal {
        background-image: url(${config.banner});
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        border-radius: 0;
    }

    .user-info {
        display: flex;
        align-items: center;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <section className="bannerPrincipal"></section>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...props }) {
    //console.log("dentro do componente", props);
    const playlistName = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}