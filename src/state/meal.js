import { DATABASE_URL } from '../firebase';
//ACTIONS
const SET_MEALS = 'SET_MEALS';
const SET_ERROR = 'SET_ERROR';
const ADD_LABEL = 'ADD_LABEL';
const REMOVE_LABEL = 'REMOVE_LABEL';
const RESET_CHECKBOX = 'RESET_CHECKBOX';

const initialState = {
   data: [],
   label: [],
   isChecked: null,
   error: null,
};

//REDUCER
export default function (state = initialState, action) {
   switch (action.type) {
      case SET_MEALS:
         return {
            label: [],
            isChecked: null,
            error: null,
            data: action.payload,
         };
      case ADD_LABEL:
         return {
            ...state,
            label: [...state.label, action.payload],
            isChecked: false,
         };
      case REMOVE_LABEL:
         return {
            ...state,
            label: state.label.filter(
               (label) => !label.includes(action.payload),
            ),
         };
      case RESET_CHECKBOX:
         removeLabel();
         return { ...state, label: [], isChecked: null };
      default:
         return state;
   }
}

//ACTON CREATORS
export const setMeals = (meals) => ({ type: SET_MEALS, payload: meals });
export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const fetchMeals = () => {
   return (dispatch) => {
      fetch(`${DATABASE_URL}/meals.json`)
         .then((response) => response.json())
         .then((data) => {
            const formattedData = data
               ? Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                 }))
               : [];
            dispatch(setMeals(formattedData));
         })
         .catch((error) => dispatch(setError));
   };
};

export const add = (data) => {
   return (dispatch) => {
      fetch(`${DATABASE_URL}/meals.json`, {
         method: 'POST',
         body: JSON.stringify(data),
      })
         .then(() => dispatch(fetchMeals()))
         .catch((error) => setError(error));
   };
};

export const remove = (mealId) => {
   return (dispatch) => {
      fetch(`${DATABASE_URL}/meals/${mealId}.json`, {
         method: 'DELETE',
      })
         .then(() => dispatch(fetchMeals()))
         .catch((error) => dispatch(setError(error)));
   };
};

export const addLabel = (label) => ({ type: ADD_LABEL, payload: label });
export const removeLabel = (label) => ({ type: REMOVE_LABEL, payload: label });
export const resetCheckbox = () => ({ type: RESET_CHECKBOX });
