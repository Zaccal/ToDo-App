import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import List from "../../UI/List/List"
import Modal from "../../UI/Modal/Modal"
import { darkenColor } from "../../utils/utils"

const ViewTagModal = () => {
  const {visibleTagModal, setVisibleTagModal, displayingTagModal} = useGlobalStateContext()

  return (
    <Modal isOpen={visibleTagModal} onClose={() => setVisibleTagModal(false)}>
      <div className="px-4 py-3 rounded-lg" style={{
        backgroundColor: displayingTagModal.color,
      }}>
        <h2 style={{
          color: darkenColor(displayingTagModal.color, 120)
        }} className="text-xl"># {displayingTagModal.name}</h2>
      </div>
      <List titleSize={12} title="tasks:" className="mt-3 rounded-lg h-[428px]">

      </List>
    </Modal>
  )
}

export default ViewTagModal