import LayoutContainer from "../../UI/LayoutContainer/LayoutContainer"
import Sidebar from "../../commponents/Sidebar/Sidebar"
import Clipboard from "../../commponents/Clipboard/Clipboard"

const Home = () => {
  // ml-[17px] my-[19px]
  const paddingY = window.innerWidth <= 1024 ? 0 : 19
  const marginX = window.innerWidth <= 1024 ? 0 : 17

  return (
    <LayoutContainer marginLeft={marginX} marginRight={marginX} paddingTop={paddingY} paddingBottom={paddingY}  typeSize="px"  col={'1/4'} spacing={20}>
        <Sidebar />
        <Clipboard />
    </LayoutContainer>
  )
}

export default Home