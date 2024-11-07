import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const loginApi = createApi({
    reducerPath: "login_api",
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
})

export const { useLoginUserMutation } = loginApi