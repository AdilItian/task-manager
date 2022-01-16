import {
  INCREMENT,
  TASK_SET_LIST,
  TASK_ADD,
  TASK_FILTER_SIDEBAR,
  SELECT_TASK,
  CONNECTION_SET_LIST,
  CONNECTION_GET_BY_ID,
  CONNECTION_ADD,
  CONNECTION_REMOVE,
} from './actions';

export interface IAppState {
  counter: number;
  tasks: Array<any>;
  sidebarTasks: Array<any>;
  selectedTask: null | any;
  connections: Array<any>;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  tasks: [],
  sidebarTasks: [],
  selectedTask: {},
  connections: [],
};

export function rootReducer(state = INITIAL_STATE, action: any): IAppState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case TASK_SET_LIST:
      return {
        ...state,
        tasks: action.payload.tasks,
        sidebarTasks: action.payload.tasks,
      };
    case TASK_ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload.task,
            taskName: `Task ${state.tasks.length + 1}`,
          },
        ],
        sidebarTasks: [
          ...state.tasks,
          {
            ...action.payload.task,
            taskName: `Task ${state.tasks.length + 1}`,
          },
        ],
      };
    case TASK_FILTER_SIDEBAR:
      if (!action.payload.searchText) {
        return { ...state, sidebarTasks: state.tasks };
      }
      return {
        ...state,
        sidebarTasks: state.tasks.filter(
          (f) =>
            f.taskName
              .toLowerCase()
              .indexOf(action.payload.searchText.toLowerCase()) > -1
        ),
      };
    case SELECT_TASK:
      return { ...state, selectedTask: action.payload.task };

    case CONNECTION_SET_LIST:
      return {
        ...state,
        connections: action.payload.connections,
      };
    case CONNECTION_ADD:
      return {
        ...state,
        connections: [...state.connections, action.payload.connection],
      };
      case CONNECTION_REMOVE:
        const removalIndex = state.connections.findIndex(f => f.id === action.payload.connectionId);
        state.connections.splice(removalIndex, 1);
      return {
        ...state,
      };
    case CONNECTION_GET_BY_ID:
      return state.connections.find((f) => f.id === action.payload.id);
  }

  return state;
}
