import {DATABASE_URL} from '../firebase';
//ACTIONS
const ADD = "ADD";
const ADD_LABEL = "ADD_LABEL";
const REMOVE_LABEL = "REMOVE_LABEL";
const RESET_CHECKBOX = "RESET_CHECKBOX";
const SET_MEALS = "SET_MEALS";
const SET_ERROR = "SET_ERROR";

//INITIAL STATE:
// {
//   id: 1454779968,
//   date: '02.02.2021',
//   start: '09:30',
//   end: "10:15",
//   time: "00:45 h",
//   type: ["pierś"]
// },
// {
//   id: 3783826922,
//   date: "04.02.2021",
//   start: "11:15",
//   end: "12:15",
//   time: "01:00 h",
//   type: ["butelka", "mleko modyfikowane"]
// },
const initialState = {
  data: [],
  label: [],
  isChecked: null,
  error: null,
}

//REDUCER
export default function(state = initialState, action) {
  switch(action.type) {
    case SET_MEALS:
      return {
        label: [],
        isChecked: null,
        error: null,
        data: action.payload
      }
    case ADD_LABEL:
      return {...state,
        label: [...state.label, action.payload],
        isChecked: false,
      };
    case REMOVE_LABEL:
      return {...state,
        label: state.label.filter((label) => !label.includes(action.payload))
      };
    case RESET_CHECKBOX:
      removeLabel();
      return {...state,
        label: [],
        isChecked: null,
      }
    case ADD:
      return {...state,
        data: [...state.data,
          {
            id: Math.floor(Date.now()/(Math.random()*2020)),
            date: action.payload.date,
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
export const resetCheckbox = () => ({type: RESET_CHECKBOX});
export const setMeals = (meals) => ({type: SET_MEALS, payload: meals});
export const setError = (error) => ({type: SET_ERROR, payload: error});

export const fetchMeals = () => {
  return (dispatch) => {
    fetch(`${DATABASE_URL}/meals.json`)
      .then(response => response.json())
      .then(data => {
        const formattedData = data
            ? Object.keys(data).map(key => ({
              id: key,
              ...data[key]
            }))
            : []
        dispatch(setMeals(formattedData))
      })
      .catch(error => dispatch(setError));
  }
};
