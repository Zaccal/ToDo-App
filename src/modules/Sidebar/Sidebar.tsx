import { useRef, useState } from "react";
import {
    BarContainer,
    Input,
    List,
    Divider,
    Stack,
    TagItem,
    TagButton,
    BarFooter,
    Button,
    SearchIcon,
    AddRoundedIcon,
    LogoutIcon,
    TuneIcon
} from "./SidebarImports";
import SearchModal from "../../components/SearchModal/SearchModal";
import AddTagModal from "../../components/AddTagModal/AddTagModal";
import AddNewListModal from "../../components/AddNewListModal/AddNewListModal";

const Sidebar = () => {
    const isScreenMd = window.innerWidth <= 1024 ? true : false
    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false)
    const [isAddTagModalVisible, setIsAddTagModalVisible] = useState(false)
    const [isAddListModalVisible, setIsAddListModalVisible] = useState(false)
    const inputSearchRef = useRef<HTMLInputElement>(null) 
    
    const openSearchModalHandler = () => {
        inputSearchRef.current?.blur()
        setIsSearchModalVisible(true)
    }

    return (
        <BarContainer isOpen={false} isMobileMode={isScreenMd} title="Menu">
            <Input ref={inputSearchRef} onClick={openSearchModalHandler} placeholder="Search" icon={<SearchIcon />}/>
            <List className="my-7" title="Tasks">

            </List>
            <Divider />
            <List className="mt-5 mb-7" title="Lists">
                {/* <ListItem messageCount={3} primary="Personal" icon={<DefaultIcon color="#ff6b6b" />}/>
                <ListItem messageCount={6} primary="Work" icon={<DefaultIcon color="#67d9e8" />}/>
                <ListItem messageCount={3} primary="List 1" icon={<DefaultIcon color="#ffd43b" />}/>
                <ListItem onClick={() => setIsAddListModalVisible(true)} primary="Add new list" icon={<AddRoundedIcon style={{width: '18px', height: '18px'}} />} /> */}
            </List>
            <Divider />
            <Stack className="mt-5" title="Tags">
                <TagItem primary="Tag 1" color="#d1eaed" />
                <TagItem primary="Tag 2" color="#ffdada" />
                <TagButton onClick={() => setIsAddTagModalVisible(true)} icon={<AddRoundedIcon style={{width: '18px', height: '18px'}} />}>Add Tag</TagButton>
            </Stack>
            <BarFooter>
                <Button className="text-sm" isLink to="/settings" variant="text" icon={<TuneIcon />}>
                    Settings
                </Button>
                <Button className="text-sm mt-1" variant="text" icon={<LogoutIcon />}>
                    Sign out
                </Button>
            </BarFooter>
            <SearchModal isOpen={isSearchModalVisible} onClose={() => setIsSearchModalVisible(false)} />
            <AddTagModal isOpen={isAddTagModalVisible} onClose={() => setIsAddTagModalVisible(false)}/>
            <AddNewListModal isOpen={isAddListModalVisible} onClose={() => setIsAddListModalVisible(false)}/>
        </BarContainer>
    );
};

export default Sidebar;
