import { GalleryWrapper, GalleryHeader, GalleryContainer, GallerySubtitle } from "./styled";
import { useGithubApiData } from "./useGithubApiData";
import Tile from "./Tile";

const Gallery = ({ title, subtitle, body }) => {
    const repos = useGithubApiData();
    console.log(repos);

    return (
        <GalleryWrapper>
            <img alt="" />
            <GalleryHeader>
                {title}
            </GalleryHeader>
            <GallerySubtitle>
                {subtitle}
            </GallerySubtitle>
            <GalleryContainer>
                <Tile
                    title={"Repository"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur."}
                    demoLink={"https://link.demo.com"}
                    codeLink={"https://link.code.com"}
                />
                <Tile
                    title={"Repository"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur."}
                    demoLink={"https://link.demo.com"}
                    codeLink={"https://link.code.com"}
                />
                <Tile
                    title={"Repository"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur."}
                    demoLink={"https://link.demo.com"}
                    codeLink={"https://link.code.com"}
                />
                <Tile
                    title={"Repository"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur."}
                    demoLink={"https://link.demo.com"}
                    codeLink={"https://link.code.com"}
                />
            </GalleryContainer>
        </GalleryWrapper>
    )
};

export default Gallery;