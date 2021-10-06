import { GalleryWrapper, GalleryHeader, GalleryTilesContainer, GallerySubtitle, GalleryLogo } from "./styled";
import Tile from "./Tile";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import logo from "../../../images/githubLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchReposData, selectRepos, selectState } from "../reposSlice";
import { useEffect } from "react";

const Gallery = ({ title, subtitle }) => {
    const repos = useSelector(selectRepos);
    const status = useSelector(selectState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReposData());
    }, [dispatch]);

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
            {status === "success" && <GalleryTilesContainer>
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