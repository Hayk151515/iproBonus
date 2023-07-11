export interface AccessTokenDataTypes {
    idClient: string;
    accessToken?: string;
    paramName: string;
    paramValue: string;
    latitude: number;
    longitude: number;
    sourceQuery: number;
}

interface Result {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
}

export interface ResponseData {
    result: Result;
    accessToken: string;
}

interface ResultOperation {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
}

export interface Data {
    typeBonusName: string;
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
}

export interface BonusData {
    resultOperation: ResultOperation;
    data: Data;
}
