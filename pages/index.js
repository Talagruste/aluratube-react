import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor: "red" 
    };

    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
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
        background-image: url("https://media-exp1.licdn.com/dms/image/C4D16AQGPOh8CafD4Rg/profile-displaybackgroundimage-shrink_350_1400/0/1668107272082?e=1673481600&v=beta&t=uHwd6gj14rgslbelDCbVRzw3oA1s9tTRRiEij-NOX2w");
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

function Timeline(props) {
    //console.log("dentro do componente", props);
    const playlistName = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(videos);

                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return (
                                        <a href={video.url}>
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