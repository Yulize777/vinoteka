import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {reviewType} from "../../models/models";


export const reviewApi = createApi({
    reducerPath: "reviewApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    tagTypes: ['review'],
    endpoints: (build) => ({
        getAllReview: build.query<reviewType[], string>({
            query: () => ({
                url: `/review`
            }),
            providesTags: result => ['review']
        }),
        createReview: build.mutation<reviewType, reviewType>({
            query: (review) => ({
                url: `/review`,
                method: 'POST',
                body: review
            }),
            invalidatesTags: ['review']
        })
    })
})