import {createApi, fakeBaseQuery, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {winesType} from "../../models/models";

export const winesApi = createApi({
    reducerPath: 'winesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    tagTypes: ['wine'],
    endpoints: (build) => ({
        fetchAllWines: build.query<winesType[],string>({
            query: (filter) => ({
                url: `/wines?${filter}`
            }),
            providesTags: result => ['wine']
        }),
        sliderWine: build.query<winesType[],string | undefined>({
            query: () => ({
                url: `/wines?_limit=4   `,
            }),
            providesTags: result => ['wine']
        }),
        detailWine: build.query<winesType[],number>({
            query: (id: number) => ({
                url: '/wines',
                params: {
                    id: id
                }
            }),
            providesTags: result => ['wine']
        })
    })
})


// import axios from "axios";
// import {winesType} from "../../models/models";
//
//
// type InitialState = {
//     wines: winesType[],
//     loading: boolean,
//     error: string | null,
//     filter: any
// }
//
// type filterType = {
//     name: string | ''
// }
//
// export const getAllWines =createAsyncThunk<winesType[], filterType | undefined, {rejectValue?: any}>(
//     'wines/getAllWines',
//     async (filter,{rejectWithValue}) => {
//
//         const getWines = await axios(`http://localhost:8080/wines?`)
//
//         if(getWines.statusText !== "OK"){
//           return rejectWithValue('server Error !!!!')
//         }
//
//         return getWines.data
//     }
// )
//
// const initialState: InitialState= {
//     wines: [],
//     filter: {
//         name: ''
//     },
//     loading: false,
//     error: null
// }
//
// const wineSlice = createSlice({
//     name: 'wines',
//     initialState,
//     reducers:{
//         searchName: (state, action) => {
//             state.filter = {
//                 ...state.filter,
//                 name:action.payload
//             }
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getAllWines.pending, (state) => {
//                 state.loading = true
//                 state.error = null
//             })
//             .addCase(getAllWines.fulfilled, (state,action) => {
//                 state.wines = action.payload;
//                 state.loading = false
//             })
//     }
// })
//
// export const {searchName} = wineSlice.actions
// export default wineSlice.reducer