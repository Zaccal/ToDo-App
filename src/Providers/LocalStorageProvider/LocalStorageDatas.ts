import { EnumIconName } from "../../types/enums/enums";
import { IList, ISettings, ITag } from "../../types/interfaces/Interfaces";
import { TypeSetState } from "../../types/types/types";


export interface ILocalStorage {
    listsStore: IList[],
    setListsStore: TypeSetState<IList[]>,
    settingsStore: ISettings,
    setSettingsStore: TypeSetState<ISettings>,
    tagsStore: ITag[],
    setTagsStore: TypeSetState<ITag[]>,
    firstVisit: boolean,
    setFirstVisit: TypeSetState<boolean>, 
}

export const ListsDatas: IList[] = [
    {
        name: 'Upcoming',
        icon: EnumIconName.keyboardDoubleArrowRight,
        active: false,
        accessEdit: false,
        tasks: [],
        id: 1
    },
    {
        name: 'Today',
        icon: EnumIconName.clipboard,
        active: true,
        accessEdit: false,
        tasks: [
            {
                name: 'Put an asterisk above the repository of this project',
                date: '',
                decriptiton: '',
                fromList: 'Today',
                id: 1,
                isDone: false,
                subtasks: [],
                tags: []
            },
            {
                name: 'Get acquainted with the project',
                date: '',
                decriptiton: '',
                fromList: 'Today',
                id: 2,
                isDone: false,
                subtasks: [],
                tags: []
            }
        ],
        id: 2
    },
    {
        name: 'Calendar',
        icon: EnumIconName.calenderar,
        active: false,
        accessEdit: false,
        tasks: [],
        id: 3
    },
    {
        name: 'Important',
        icon: EnumIconName.star,
        active: false,
        accessEdit: false,
        tasks: [],
        id: 4
    },
    {
        name: 'Personal',
        icon: EnumIconName.defualtIcon,
        defualtIconColor: '#ff6b6b',
        active: false,
        accessEdit: true,
        tasks: [],
        id: 5
    },
    {
        name: 'Work',
        icon: EnumIconName.defualtIcon,
        defualtIconColor: '#67d9e8',
        active: false,
        accessEdit: true,
        tasks: [],
        id: 6
    }
] 

export const settingsDatas: ISettings = {
    theme: "light",
}

export const tagsDatas: ITag[] = [
    {
        name: 'Work 1',
        color: '#d1eaed',
        id: 1,
        listsById: []
    },
    {
        name: 'Work 2',
        color: '#ffdada',
        id: 2,
        listsById: [],
    }
]

export const defualtValueLocalStorage: ILocalStorage = {
    listsStore: ListsDatas,
    setListsStore: () => undefined,
    settingsStore: {
        theme: 'light'
    },
    setSettingsStore: () => undefined,
    tagsStore: tagsDatas,
    setTagsStore: () => undefined,
    firstVisit: true,
    setFirstVisit: () => undefined
}