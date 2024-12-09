import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GalleryWrapper,
  GalleryHeader,
  GalleryTilesContainer,
  GallerySubtitle,
  GalleryLogo,
  GalleryLogoWrapper,
} from "./styled";
import Tile from "./Tile";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { ReactComponent as GithubLogo } from "../../../assets/images/githubLogo.svg";
import { fetchReposData, selectRepos, selectState } from "../reposSlice";
import { Repo } from "../types";

interface Props {
  title: string;
  subtitle: string;
}

const Gallery = ({ title, subtitle }: Props) => {
  const repos = useSelector(selectRepos);
  const status = useSelector(selectState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReposData());
  }, [dispatch]);

  return (
    <GalleryWrapper>
      <GalleryLogoWrapper>
        <GalleryLogo>
          <GithubLogo />
        </GalleryLogo>
      </GalleryLogoWrapper>
      <GalleryHeader>{title}</GalleryHeader>
      <GallerySubtitle>{subtitle}</GallerySubtitle>
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage />}
      {status === "success" && (
        <GalleryTilesContainer>
          {repos.map((repo: Repo) => (
            <Tile
              key={repo.id}
              title={repo.name || "n/a"}
              description={repo.description || "n/a"}
              demoLink={repo.homepage || "n/a"}
              codeLink={repo.html_url || "n/a"}
            />
          ))}
        </GalleryTilesContainer>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
