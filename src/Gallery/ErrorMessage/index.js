import { ErrorCaption, ErrorHeader, ErrorSign } from "./styled";
import { Button } from "../../Button";
import sign from "../../warningSign.svg";

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
        <Button>Go to Github</Button>
    </>
);

export default ErrorMessage;