import { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../hooks";

interface Props {
  title: string;
  subtitle: string;
}

const Gallery = ({ title, subtitle }: Props) => {
  const repos = useAppSelector(selectRepos);
  const status = useAppSelector(selectState);
  const dispatch = useAppDispatch();

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
