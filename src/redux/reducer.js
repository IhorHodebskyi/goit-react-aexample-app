// import { statusFilters } from './constants';
// import { combineReducers } from 'redux';
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return { ...state, tasks: [...state.tasks, action.payload] };

//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };

//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id === action.payload) {
//             return {
//               ...task,
//               completed: !task.completed,
//             };
//           }
//           return task;
//         }),
//       };

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   state: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { addTask, deleteTask, setStatusFilter, toggleCompleted } from "./actions";

const tasksInitialState = [
	{ id: 0, text: "Learn HTML and CSS", completed: true },
	{ id: 1, text: "Get good at JavaScript", completed: true },
	{ id: 2, text: "Master React", completed: false },
	{ id: 3, text: "Discover Redux", completed: false },
	{ id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
	[addTask]: (state, action) => {
		return [...state, action.payload];
	},
	[deleteTask]: (state, action) => {
		return state.filter(task => task.id !== action.payload);
	},

	[toggleCompleted]: (state, action) => {
		return state.map(task => {
			if (task.id === action.payload) {
				return {
					...task,
					completed: !task.completed,
				};
			}
		});
	},
});

const filtersInitialState = {
	status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
	[setStatusFilter]: (state, action) => {
		return {
			...state,
			status: action.payload,
		};
	},
});
