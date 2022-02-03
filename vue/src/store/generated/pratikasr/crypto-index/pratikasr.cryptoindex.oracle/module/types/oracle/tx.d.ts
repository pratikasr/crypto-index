import { Reader, Writer } from "protobufjs/minimal";
import { RatesCallData } from "../oracle/rates";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "pratikasr.cryptoindex.oracle";
export interface MsgRatesData {
    creator: string;
    oracleScriptId: number;
    sourceChannel: string;
    calldata: RatesCallData | undefined;
    askCount: number;
    minCount: number;
    feeLimit: Coin[];
    prepareGas: number;
    executeGas: number;
    clientId: string;
}
export interface MsgRatesDataResponse {
}
export declare const MsgRatesData: {
    encode(message: MsgRatesData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRatesData;
    fromJSON(object: any): MsgRatesData;
    toJSON(message: MsgRatesData): unknown;
    fromPartial(object: DeepPartial<MsgRatesData>): MsgRatesData;
};
export declare const MsgRatesDataResponse: {
    encode(_: MsgRatesDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRatesDataResponse;
    fromJSON(_: any): MsgRatesDataResponse;
    toJSON(_: MsgRatesDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgRatesDataResponse>): MsgRatesDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RatesData(request: MsgRatesData): Promise<MsgRatesDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RatesData(request: MsgRatesData): Promise<MsgRatesDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
