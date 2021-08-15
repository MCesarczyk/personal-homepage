import { GalleryWrapper, GalleryHeader, GalleryTilesContainer, GallerySubtitle } from "./styled";
import { useGithubApiData } from "./useGithubApiData";
import Tile from "./Tile";

const Gallery = ({ title, subtitle, body }) => {
    const repos = useGithubApiData();
    const status = repos.status;
    
    return (
        <GalleryWrapper>
            <img alt="" />
            <GalleryHeader>
                {title}
            </GalleryHeader>
            <GallerySubtitle>
                {subtitle}
            </GallerySubtitle>
            <GalleryTilesContainer>
                {status === "loading" ? (
                    <div>
                        Loading...
                    </div>
                ) : (status === "error" ? (
                    <div>
                        Unable to fetch... please check your internet connection
                    </div>
                ) : (
                    <>
                        {repos.map((repo) => (
                            <Tile
                                key={repo.id}
                                title={repo.name}
                                description={repo.description || "n/a"}
                                demoLink={`https://mcesarczyk.github.io/${repo.name}`}
                                codeLink={repo.html_url}
                            />
                        ))}
                    </>
                ))}
            </GalleryTilesContainer>
        </GalleryWrapper>
    )
};

export default Gallery;