import {
    GalleryWrapper,
    GalleryHeader,
    GalleryTilesContainer,
    GallerySubtitle,
    GalleryLogo
} from "./styled";
import { useGithubApiData } from "../useGithubApiData";
import Tile from "./Tile";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import logo from "../../../images/githubLogo.svg";
import { useSelector } from "react-redux";
import { selectRepos, selectState } from "../reposSlice";

const Gallery = ({ title, subtitle }) => {
    useGithubApiData();
    const repos = useSelector(selectRepos);
    const status = useSelector(selectState);

    return (
        <GalleryWrapper>
            <GalleryLogo src={logo} alt="Github logo"></GalleryLogo>
            <GalleryHeader>
                {title}
            </GalleryHeader>
            <GallerySubtitle>
                {subtitle}
            </GallerySubtitle>
            {status === "loading" && <Loader />}
            {status === "error" && <ErrorMessage />}
            {status === "success" && repos && <GalleryTilesContainer>
                {repos.map((repo) => (
                    <Tile
                        key={repo.id}
                        title={repo.name || "n/a"}
                        description={repo.description || "n/a"}
                        demoLink={repo.homepage || "n/a"}
                        codeLink={repo.html_url || "n/a"}
                    />
                ))}
            </GalleryTilesContainer>
            }
        </GalleryWrapper>
    )
};

export default Gallery;