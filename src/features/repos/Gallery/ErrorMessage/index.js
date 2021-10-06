import { ErrorCaption, ErrorHeader, WarningSignWrapper } from "./styled";
import { Button } from "../../../../common/Button";
import { ReactComponent as WarningSign } from "../../../../assets/images/warningSign.svg";

const ErrorMessage = () => (
    <>
        <WarningSignWrapper>
            <WarningSign />
        </WarningSignWrapper>
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