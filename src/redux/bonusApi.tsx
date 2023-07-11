import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BonusData } from '../types'

export const bonusApi = createApi({
    reducerPath: 'bonusApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://84.201.188.117:5003',
        prepareHeaders: (headers) => {
            headers.set('AccessKey', '891cf53c-01fc-4d74-a14c-592668b7a03c');
            return headers;
        },
    }),
    endpoints(build) {
        return {
            getBonusInfo: build.query<BonusData, string>({
                query: (accessToken: string) => `/api/v3/ibonus/generalinfo/${accessToken}`,
            }),
        }
    }
});


export const { useLazyGetBonusInfoQuery } = bonusApi;
