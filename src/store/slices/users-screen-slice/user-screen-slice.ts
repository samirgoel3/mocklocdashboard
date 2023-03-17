import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { usersList } from '../../../screens/user-list-screen/mocks/index';
import { AppDispatch } from '../../store';


type loadingStates = 'idle' | 'pending' | 'succeeded' | 'failed'

export interface UsersListScreenState {
    loading: loadingStates,
    users: UserCardViewProps[]
}

const inititalState: UsersListScreenState = {
    loading: 'idle',
    users: []
}



const userScreenSlice = createSlice(
    {
        name: 'userListScreenSlice',
        initialState: inititalState,
        reducers: {
            loading: (state, action: PayloadAction<loadingStates>) => {
                state.loading = action.payload
            },
            users: (state, action: PayloadAction<UserCardViewProps[]>) => {
                state.users = action.payload
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                console.log("Api Fullfilled")
            }),
                builder.addCase(fetchUsers.rejected, (state, action) => {
                    console.log("Api Rejected")
                }),
                builder.addCase(fetchUsers.pending, (state, action) => {
                    console.log("Api Pending")
                })
        }
    }
)

export const { loading, users } = userScreenSlice.actions


/////////////// Aysn thunk calls for fetching users ///////////////

/**
 * Calling Api for fetching all users or user according to the required pagination
 */

const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (pageNumber: number, thunkAPI) => {
        const response = await testApi
        return response
    }
)


const testApi = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (usersList.length > 20) { resolve(usersList) }
        else { reject("Users count is not according to the required logic") }
    }, 3000)
})



////////// DISPATCHERS //////////////
export const getDispatcherForCallingApi = (pageNumber:number) => (dispatch: AppDispatch) => {
    return dispatch(fetchUsers(56));
    // return dispatch({ type: fetchUsers, payload: pageNumber });
};