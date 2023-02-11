import WebViewScreenView from "./web-view-screen-view";
import useWebViewScreenViewController from "./web-view-screen-controller";
const WebViewScreen = () => {
    const CONTROLLER = useWebViewScreenViewController();
    return (
        <WebViewScreenView testWebViewScreenValue={CONTROLLER.testWebViewScreenValue} />
    )

}

export default WebViewScreen;