import { useRef, useState } from "react";
import {
    BarContainer,
    Input,
    List,
    Divider,
    Stack,
    TagButton,
    BarFooter,
    Button,
    SearchIcon,
    AddRoundedIcon,
    TuneIcon,
    ListItem,
    SearchModal,
    SidebarListsRender,
    SidebarTagsRender,
    AddNewListModal,
    AddTagModal,
    ViewTagModal
} from "./SidebarImports";


const Sidebar = () => {
    const isScreenMd = window.innerWidth <= 1024 ? true : false
    const inputSearchRef = useRef<HTMLInputElement>(null) 
    const [modalsVisble, setModalsVisible] = useState({
        isSearchModalVisible: false,
        isAddTagModalVisible: false,
        isAddListModalVisible: false
    })

    const openSearchModalHandler = () => {
        inputSearchRef.current?.blur()
        setModalsVisible({...modalsVisble, isSearchModalVisible: true})
    }

    return (
        <BarContainer isOpen={false} isMobileMode={isScreenMd} title="Menu">
            <div className="h-[85vh] relative overflow-y-scroll">
                <Input 
                    ref={inputSearchRef} 
                    onClick={openSearchModalHandler} 
                    placeholder="Search" 
                    icon={<SearchIcon />}
                />
                <List className="my-7" title="Tasks">
                    <SidebarListsRender variant="defualt"/>
                </List>
                <Divider />
                <List className="mt-5 mb-7" title="Lists">
                    <SidebarListsRender variant="user"/>
                    <ListItem 
                        onClick={() => setModalsVisible({...modalsVisble, isAddListModalVisible: true})} 
                        icon={<AddRoundedIcon style={{width: '20px', height: '20px'}} />} 
                        primary="Add new list" 
                    />
                </List>
                <Divider />
                <Stack className="mt-5 mb-5" title="Tags">
                    <SidebarTagsRender />
                    <TagButton  
                        onClick={() => setModalsVisible({...modalsVisble, isAddTagModalVisible: true})} 
                        icon={<AddRoundedIcon style={{width: '18px', height: '18px'}} />}
                    >
                        Add Tag
                    </TagButton>
                </Stack>
            </div>
            <BarFooter>
                <div className="px-4">
                    <Button className="text-sm lg:pb-2 pb-0" isLink to="/settings" variant="text" icon={<TuneIcon />}>
                        Settings
                    </Button>
                </div>
            </BarFooter>
            <SearchModal 
                isOpen={modalsVisble.isSearchModalVisible} 
                onClose={() => setModalsVisible({...modalsVisble, isSearchModalVisible: false})} 
            />
            <AddTagModal 
                isOpen={modalsVisble.isAddTagModalVisible} 
                onClose={() => setModalsVisible({...modalsVisble, isAddTagModalVisible: false})}
            />
            <AddNewListModal 
                isOpen={modalsVisble.isAddListModalVisible} 
                onClose={() => setModalsVisible({...modalsVisble, isAddListModalVisible: false})}
            />
            <ViewTagModal />
        </BarContainer>
    );
};

export default Sidebar;