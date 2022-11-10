import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "Iron Man",
    "handle": "@ironman",
    "image": "/images/elon_musk.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: initialState,
    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    },
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true
            state.tuits = []
        },
        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = payload
        },
        [findTuitsThunk.rejected]: (state) => {
            state.loading = false
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits.push(payload)
        },
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;