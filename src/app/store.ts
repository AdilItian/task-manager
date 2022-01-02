import {
  INCREMENT,
  TASK_SET_LIST,
  TASK_ADD,
  TASK_FILTER_SIDEBAR,
} from './actions';

export interface IAppState {
  counter: number;
  tasks: Array<any>;
  sidebarTasks: Array<any>;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  tasks: [],
  sidebarTasks: [],
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
  }

  return state;
}
