import React, { useCallback, useEffect, useState } from 'react';
import BonusComponent from '../components/BonusComponent';
import ButtonComponent from '../components/ButtonComponent';
import { useGetAccessTokenMutation } from '../redux/accessApi';
import { useLazyGetBonusInfoQuery } from '../redux/bonusApi';
import { AccessTokenDataTypes } from '../types';

const requestData: AccessTokenDataTypes = {
    idClient: "2c44d8c2-c89a-472e-aab3-9a8a29142315",
    accessToken: "",
    paramName: "device",
    paramValue: "7db72635-fd0a-46b9-813b-1627e3aa02ea",
    latitude: 0,
    longitude: 0,
    sourceQuery: 0
}

function Home() {
    const [getAccessToken] = useGetAccessTokenMutation();
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [getBonus,{ data, isLoading, isSuccess }] = useLazyGetBonusInfoQuery();

    useEffect(() => {
        if (accessToken) getBonus(accessToken)
    }, [accessToken]);

    const getAccessTokenRequest = useCallback(async (): Promise<void> => {
        const response = await getAccessToken(requestData);
        if ('data' in response) {
            const { data } = response;
            await setAccessToken(data.accessToken);
        }
    }, [])

    return (
        <div className="home__page">
            { Object.keys(data || {}).length && isSuccess
                ?  <BonusComponent bonusInfo={data?.data} />
                :  (
                    <ButtonComponent
                        btnText="получить информацию"
                        onClick={() => getAccessTokenRequest()}
                        loading={isLoading}
                    />
                    )
            }
        </div>
    )
}

export default Home;
