import { useCallback } from 'react'
import { useGlobalStateContext } from "../../Providers/GlobalStateProvider/GlobalStateProvider"
import { useLocalStorageContext } from "../../Providers/LocalStorageProvider/LocalStorageProvider"
import List from "../../UI/List/List"
import Modal from "../../UI/Modal/Modal"
import { ITask } from "../../types/interfaces/Interfaces"
import { darkenColor } from "../../utils/utils"
import Task from "../Task/Task"

const ViewTagModal = () => {
  const {tagModalData, setTagModalData} = useGlobalStateContext()
  const {tagsStore, listsStore} = useLocalStorageContext()
  const displayingTagData = tagModalData.displayingTagData || {
    name: 'Error: Tag not found',
    color: '#42414d',
    id: 0,
    listsById: []
  } 

  const findTaskWithItTag = useCallback((): ITask[] => {
    const result: ITask[] = []

    listsStore.forEach(listData => {
      listData.tasks.forEach(taskData => {
          taskData.tags.forEach(tagData => {
            if (tagData.id === displayingTagData.id) result.push(taskData) 
          })
      })
    })

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagsStore, listsStore, tagModalData])  

  return (
    <Modal isOpen={tagModalData.isOpenTagModal} onClose={() => setTagModalData(prev => ({...prev, isOpenTagModal: false}))}>
      <div className="px-4 py-3 rounded-lg" style={{
        backgroundColor: displayingTagData.color,
      }}>
        <h2 style={{
          color: darkenColor(displayingTagData.color, 120)
        }} className="text-xl"># {displayingTagData.name}</h2>
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