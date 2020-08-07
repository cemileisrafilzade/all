// ACTION TYPES
const ADD_SECTION = "ADD_SECTION";
const ADD_PROJECT = "ADD_PROJECT";
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO_STATE = "TOGGLE_TODO_STATE";

// SELECTORS
const MODULE_NAME = "data";
export const getSections = (state) => state[MODULE_NAME].sections;

// REDUCER

const initialState = {
  sections: [
    {
      id: createID(),
      name: "First section",
      projects: [
        {
          id: createID(),
          name: "Hello World",
          imgUri:
            "https://images.unsplash.com/photo-1588753088478-b8285e839232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80",
          todos: [
            { id: createID(), text: "Sample text", done: false },
            { id: createID(), text: "Sample text2", done: false },
          ],
        },
        {
          id: createID(),
          name: "Something",
          imgUri:
            "https://images.unsplash.com/photo-1588707797044-94ec2a945366?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          todos: [
            { id: createID(), text: "Sample text22", done: false },
            { id: createID(), text: "Sample text3", done: false },
          ],
        },
      ],
    },
    {
      id: createID(),
      name: "Second section",
      projects: [
        {
          id: createID(),
          name: "Other",
          imgUri:
            "https://images.unsplash.com/photo-1588707611794-49836ece1f53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          todos: [
            { id: createID(), text: "Sample text", done: false },
            { id: createID(), text: "Sample text", done: false },
          ],
        },
      ],
    },
  ],
};

export function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_SECTION:
      return {
        ...state,
        sections: [
          ...state.sections,
          {
            id: createID(),
            name: payload,
            projects: [],
          },
        ],
      };
    case ADD_PROJECT:
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === payload.sectionID) {
            return {
              ...section,
              projects: [
                ...section.projects,
                {
                  id: createID(),
                  name: payload.name,
                  imgUri: payload.imgUri,
                  todos: [],
                },
              ],
            };
          }
          return section;
        }),
      };
    case TOGGLE_TODO_STATE:
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === payload.sectionID) {
            return {
              ...section,
              projects: section.projects.map((project) => {
                if (project.id === payload.projectID) {
                  return {
                    ...project,
                    todos: project.todos.map((todo) => {
                      if (todo.id === payload.todoID) {
                        return {
                          ...todo,
                          done: !todo.done,
                        };
                      }
                      return todo;
                    }),
                  };
                }
                return project;
              }),
            };
          }
          return section;
        }),
      };
    case UPDATE_TODO:
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === payload.sectionID) {
            return {
              ...section,
              projects: section.projects.map((project) => {
                if (project.id === payload.projectID) {
                  return {
                    ...project,
                    todos: project.todos.map((todo) => {
                      if (todo.id === payload.todoID) {
                        return {
                          ...todo,
                          text: payload.todoText,
                        };
                      }
                      return todo;
                    }),
                  };
                }
                return project;
              }),
            };
          }
          return section;
        }),
      };
    case ADD_TODO:
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === payload.sectionID) {
            return {
              ...section,
              projects: section.projects.map((project) => {
                if (project.id === payload.projectID) {
                  return {
                    ...project,
                    todos: [
                      {
                        id: createID(),
                        text: payload.todoText,
                        done: false,
                      },
                      ...project.todos,
                    ],
                  };
                }
                return project;
              }),
            };
          }
          return section;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === payload.sectionID) {
            return {
              ...section,
              projects: section.projects.map((project) => {
                if (project.id === payload.projectID) {
                  return {
                    ...project,
                    todos: project.todos.filter(
                      (todo) => todo.id !== payload.todoID
                    ),
                  };
                }
                return project;
              }),
            };
          }
          return section;
        }),
      };
    default:
      return state;
  }
}

// ACTION CREATORS

export const addSection = (payload) => ({
  type: ADD_SECTION,
  payload,
});
export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
export const toggleTodoState = (payload) => ({
  type: TOGGLE_TODO_STATE,
  payload,
});

function createID() {
  return `${Date.now()}${Math.random()}`;
}
