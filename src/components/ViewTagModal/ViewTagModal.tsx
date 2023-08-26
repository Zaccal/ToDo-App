import { useCallback } from 'react'
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import List from "../../UI/List/List"
import Modal from "../../UI/Modal/Modal"
import { ITask } from "../../types/interfaces/Interfaces"
import { darkenColor } from "../../utils/utils"
import Task from "../Task/Task"

const ViewTagModal = () => {
  const {visibleTagModal, setVisibleTagModal, displayingTagModal} = useGlobalStateContext()
  const {listsStore} = useLocalStorageContext()

  const findTaskWithItTag = useCallback((): ITask[] => {
    const result: ITask[] = []

    listsStore.forEach(listData => {
      listData.tasks.forEach(taskData => {
          taskData.tags.forEach(tagData => {
            if (tagData.id === displayingTagModal.id) result.push(taskData) 
          })
      })
    })

    return result
  }, [listsStore, displayingTagModal])  

  return (
    <Modal isOpen={visibleTagModal} onClose={() => setVisibleTagModal(false)}>
      <div className="px-4 py-3 rounded-lg" style={{
        backgroundColor: displayingTagModal.color,
      }}>
        <h2 style={{
          color: darkenColor(displayingTagModal.color, 120)
        }} className="text-xl"># {displayingTagModal.name}</h2>
      </div>
      <List gapListItems={false} titleSize={12} title="tasks:" className="mt-3 rounded-lg h-[428px]">
        {findTaskWithItTag().map(taskData => {
          return <Task 
                    isButtonAboutTask={false} 
                    name={taskData.name} 
                    isDone={taskData.isDone} 
                    key={taskData.id}
                    fromList={taskData.fromList}
                    date={taskData.date}
                    subtasksCount={taskData.subtasks.length}
                    id={taskData.id}
                 />
        })}
      </List>
    </Modal>
  )
}

export default ViewTagModal