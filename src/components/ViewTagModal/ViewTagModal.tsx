import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import Divider from "../../UI/Divider/Divider"
import List from "../../UI/List/List"
import Modal from "../../UI/Modal/Modal"

const ViewTagModal = () => {
  const {visibleTagModal, setVisibleTagModal, displayingTagModal} = useGlobalStateContext()

  return (
    <Modal isOpen={visibleTagModal} onClose={() => setVisibleTagModal(false)}>
      <h2 style={{
        color: displayingTagModal.color
      }} className="mb-2 text-xl"># {displayingTagModal.name}</h2>
      <Divider />
      <List titleSize={12} title="tasks:" className="mt-3 rounded-lg h-[428px]">

      </List>
    </Modal>
  )
}

export default ViewTagModal