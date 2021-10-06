import { ReactComponent as GithubThumbnail } from "../../assets/images/githubThumbnail.svg";
import { ReactComponent as LinkedinThumbnail } from "../../assets/images/linkedinThumbnail.svg";
import { ReactComponent as FacebookThumbnail } from "../../assets/images/facebookThumbnail.svg";
import { ReactComponent as InstagramThumbnail } from "../../assets/images/instagramThumbnail.svg";
import {
    FACEBOOK_ADRESS,
    GITHUB_ADRESS,
    INSTAGRAM_ADRESS,
    LINKEDIN_ADRESS
} from "../../assets/data/adresses";

export const thumbnails = [
    {
        id: 1,
        thumbnail: <GithubThumbnail />,
        url: GITHUB_ADRESS,
    },
    {
        id: 2,
        thumbnail: <LinkedinThumbnail />,
        url: LINKEDIN_ADRESS,
    },
    {
        id: 3,
        thumbnail: <FacebookThumbnail />,
        url: FACEBOOK_ADRESS,
    },
    {
        id: 4,
        thumbnail: <InstagramThumbnail />,
        url: INSTAGRAM_ADRESS,
    },
];