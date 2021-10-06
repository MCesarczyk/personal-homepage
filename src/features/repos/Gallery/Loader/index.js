import circle from "../../../../assets/images/loaderCircle.svg";
import { LoaderCaption, LoaderCircle } from "./styled";

const Loader = () => (
    <>
        <LoaderCaption>
            Please wait while projects are being loaded...
        </LoaderCaption>
        <LoaderCircle src={circle}></LoaderCircle>
    </>
);

export default Loader;