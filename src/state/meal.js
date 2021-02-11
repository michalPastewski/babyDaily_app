//ACTIONS
const ADD = "ADD";

//INITIAL STATE:
const initialState = [
  {
    id: 1454779968,
    date: '02.02.2021',
    start: '09:30',
    end: "10:15",
    time: "00:45",
    type: "breast"
  },
  {
    id: 3783826922,
    date: "04.02.2021",
    start: "11:15",
    end: "12:15",
    time: "01:00",
    type: "butelka"
  },
];

//REDUCER
export default function(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return [...state,
      {
        id: Math.floor(Date.now()/(Math.random()*2020)),
        date: Date.toLocalDateString(),
        start: action.payload.start,
        end: action.payload.end,
        time: action.payload.time,
        type: action.payload.type
      }];
    default:
      return state;
  }
}

//ACTON CREATORS
export const add = (data) => ({type: ADD, payload: data});