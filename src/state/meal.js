//ACTIONS
const ADD = "ADD";
const ADD_LABEL = "ADD_LABEL";
const REMOVE_LABEL = "REMOVE_LABEL";
const RESET_CHECKBOX = "RESET_CHECKBOX";

//INITIAL STATE:
const initialState = {
  data: [
    {
      id: 1454779968,
      date: '02.02.2021',
      start: '09:30',
      end: "10:15",
      time: "00:45 h",
      type: ["pierś"]
    },
    {
      id: 3783826922,
      date: "04.02.2021",
      start: "11:15",
      end: "12:15",
      time: "01:00 h",
      type: ["butelka", "mleko modyfikowane"]
    },
  ],
  label: [],
  isChecked: null,
}

//REDUCER
export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_LABEL:
      return {...state,
        label: [...state.label, action.payload],
        isChecked: null,
      };
    case REMOVE_LABEL:
      return {...state,
        label: state.label.filter((label) => !label.includes(action.payload))
      };
    case RESET_CHECKBOX:
      return {...state,
        isChecked: false
      }
    case ADD:
      return {...state,
        data: [...state.data,
          {
            id: Math.floor(Date.now()/(Math.random()*2020)),
            date: action.payload.date.toLocaleDateString(),
            start: action.payload.start,
            end: action.payload.end,
            time: action.payload.time,
            type: action.payload.type
          }
        ]};
    default:
      return state;
  }
}

//ACTON CREATORS
export const add = (data) => ({type: ADD, payload: data});
export const addLabel = (label) => ({type: ADD_LABEL, payload: label});
export const removeLabel = (label) => ({type: REMOVE_LABEL, payload: label});
export const resetCheckbox = () => ({type: RESET_CHECKBOX})