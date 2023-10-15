import LayoutContainer from "../../UI/LayoutContainer/LayoutContainer";
import Sidebar from "../../modules/Sidebar/Sidebar";
import Clipboard from "../../modules/Clipboard/Clipboard";

const Home = () => {
    const paddingY = window.innerWidth <= 1024 ? 0 : 19;
    const marginX = window.innerWidth <= 1024 ? 0 : 17;

    return (
        <LayoutContainer
            marginLeft={marginX}
            marginRight={marginX}
            paddingTop={paddingY}
            paddingBottom={paddingY}
            typeSize="px"
            col={"1/2"}
            spacing={20}
            hScreen
        >
            <Sidebar />
            <Clipboard />
        </LayoutContainer>
    );
};

export default Home;
