import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AccessTokenDataTypes, ResponseData } from '../types'

export const accessApi = createApi({
  reducerPath: 'accessApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://84.201.188.117:5021',
    prepareHeaders: (headers) => {
      headers.set('AccessKey', '891cf53c-01fc-4d74-a14c-592668b7a03c');
      return headers;
    },
  }),
  endpoints(build) {
    return {
      getAccessToken: build.mutation<ResponseData, AccessTokenDataTypes>({
        query: (data: AccessTokenDataTypes) => ({
          url: `/api/v3/clients/accesstoken`,
          method: 'POST',
          body: data,
        }),
      }),
    }
  }
});


export const { useGetAccessTokenMutation } = accessApi;
