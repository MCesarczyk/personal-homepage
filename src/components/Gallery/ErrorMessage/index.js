import { ErrorCaption, ErrorHeader, ErrorSign } from "./styled";
import { Button } from "../../../common/Button";
import sign from "../../../images/warningSign.svg";

const ErrorMessage = () => (
    <>
        <ErrorSign src={sign}></ErrorSign>
        <ErrorHeader>
            Ooops! Data loading failed...
        </ErrorHeader>
        <ErrorCaption>
            It looks there is any problem with connection.<br />
            You can check my projects directly on a Github website.
        </ErrorCaption>
        <Button>
            <a href="https://github.com/MCesarczyk" target="_blank" rel="noreferrer" >
                Go to Github
            </a>
        </Button>
    </>
);

export default ErrorMessage;