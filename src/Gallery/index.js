import { GalleryWrapper, GalleryHeader, GalleryTilesContainer, GallerySubtitle, GalleryLogo } from "./styled";
import { useGithubApiData } from "./useGithubApiData";
import Tile from "./Tile";
import logo from "../githubLogo.svg";
import Loader from "./Loader";

const Gallery = ({ title, subtitle, body }) => {
    const repos = useGithubApiData();
    const status = repos.status;

    return (
        <GalleryWrapper>
            <GalleryLogo src={logo} alt="Github logo"></GalleryLogo>
            <GalleryHeader>
                {title}
            </GalleryHeader>
            <GallerySubtitle>
                {subtitle}
            </GallerySubtitle>
            {status === "loading" ? (
                <Loader />
            ) : (status === "error" ? (
                <div>
                    Unable to fetch... please check your internet connection
                </div>
            ) : (
                <GalleryTilesContainer>
                    {repos.map((repo) => (
                        <Tile
                            key={repo.id}
                            title={repo.name}
                            description={repo.description || "n/a"}
                            demoLink={`https://mcesarczyk.github.io/${repo.name}`}
                            codeLink={repo.html_url}
                        />
                    ))}
                </GalleryTilesContainer>
            ))}
        </GalleryWrapper>
    )
};

export default Gallery;