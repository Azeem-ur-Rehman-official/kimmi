import { emptySplitApi } from "./emptySplitApi";
import { API_END_POINTS } from "../config/ApiEndPoints";

export const api = emptySplitApi.injectEndpoints({
  reducerPath: "api",
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    // User APIs
    loginuser: builder.mutation({
      query: ({ data }) => ({
        url:
          API_END_POINTS.login +
          "?login=" +
          data["email"] +
          "&password=" +
          data["password"],
        method: "GET",
      }),
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: API_END_POINTS.registerNewUser,
        method: "POST",
        body: data,
      }),
    }),

    forgotPasswordApi: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.forgotPasswordApi + "?login=" + data["email"],
        method: "GET",
      }),
    }),

 
    changepassword: builder.mutation({
      query: ({ data }) => ({
        url:
          API_END_POINTS.changePassword +
          "?userId=" +
          data["userId"] +
          "&login=" +
          data["login"] +
          "&currentPassword=" +
          data["currentpassword"] +
          "&newPassword=" +
          data["password"] +
          "&verifyPassword=" +
          data["password"],
        method: "GET",
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: API_END_POINTS.logout,
        method: "POST",
      }),
    }),

    
    
  }), ///////////EndPoints Ended

  overrideExisting: true,
});

export const {
  useLoginuserMutation,
  useSignupMutation,
  useForgotPasswordApiMutation,
  useLogoutMutation,
  useChangepasswordMutation,

} = api;
