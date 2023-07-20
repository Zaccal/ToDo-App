import { BarContainer, Input, List, ListItem, BiSearch, FaTasks, Divider, DefaultIcon, Stack, TagItem, TagButton, BsPlusLg, BarFooter, Button, GiSettingsKnobs, ImExit } from './SidebarImports'

const Sidebar = () => {
  const isScreenMd = window.innerWidth <= 1024 ? true : false

  return (
    <BarContainer isOpen={false} isMobileMode={isScreenMd} title="Menu">
        <Input placeholder="Search" icon={<BiSearch />}/>
        <List className="my-7" title="Tasks">
          <ListItem messageCount={12} primary="Upcoming" icon={<FaTasks />}/>
          <ListItem active messageCount={5} primary="Today" icon={<FaTasks />}/>
          <ListItem primary="Celender" icon={<FaTasks />}/>
          <ListItem primary="Sticky wall" icon={<FaTasks />}/>
        </List>
        <Divider />
        <List className="mt-5 mb-7" title="Lists">
          <ListItem messageCount={3} primary="Personal" icon={<DefaultIcon color="#ff6b6b"/>}/>
          <ListItem messageCount={6} primary="Work" icon={<DefaultIcon color="#67d9e8"/>}/>
          <ListItem messageCount={3} primary="List 1" icon={<DefaultIcon color="#ffd43b"/>}/>
        </List>
        <Divider />
        <Stack className="mt-5" title="Tags">
          <TagItem primary="Tag 1" color="#d1eaed"/>
          <TagItem primary="Tag 2" color="#ffdada"/>
          <TagButton icon={<BsPlusLg />}>Add Tag</TagButton>
        </Stack>
        <BarFooter>
          <Button className="text-sm" isLink to="/settings" variant="text" icon={<GiSettingsKnobs />} >Settings</Button>
          <Button className="text-sm mt-1" variant="text" icon={<ImExit />} >Sign out</Button>
        </BarFooter>
    </BarContainer> 
  )
}

export default Sidebar