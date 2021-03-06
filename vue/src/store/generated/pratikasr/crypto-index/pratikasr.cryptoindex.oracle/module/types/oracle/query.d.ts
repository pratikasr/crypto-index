import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../oracle/params";
import { RatesResult } from "../oracle/rates";
export declare const protobufPackage = "pratikasr.cryptoindex.oracle";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryRatesRequest {
    requestId: number;
}
export interface QueryRatesResponse {
    result: RatesResult | undefined;
}
export interface QueryLastRatesIdRequest {
}
export interface QueryLastRatesIdResponse {
    requestId: number;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryRatesRequest: {
    encode(message: QueryRatesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRatesRequest;
    fromJSON(object: any): QueryRatesRequest;
    toJSON(message: QueryRatesRequest): unknown;
    fromPartial(object: DeepPartial<QueryRatesRequest>): QueryRatesRequest;
};
export declare const QueryRatesResponse: {
    encode(message: QueryRatesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryRatesResponse;
    fromJSON(object: any): QueryRatesResponse;
    toJSON(message: QueryRatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryRatesResponse>): QueryRatesResponse;
};
export declare const QueryLastRatesIdRequest: {
    encode(_: QueryLastRatesIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastRatesIdRequest;
    fromJSON(_: any): QueryLastRatesIdRequest;
    toJSON(_: QueryLastRatesIdRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastRatesIdRequest>): QueryLastRatesIdRequest;
};
export declare const QueryLastRatesIdResponse: {
    encode(message: QueryLastRatesIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastRatesIdResponse;
    fromJSON(object: any): QueryLastRatesIdResponse;
    toJSON(message: QueryLastRatesIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastRatesIdResponse>): QueryLastRatesIdResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** RatesResult defines a rpc handler method for MsgRatesData. */
    RatesResult(request: QueryRatesRequest): Promise<QueryRatesResponse>;
    /** LastRatesId query the last Rates result id */
    LastRatesId(request: QueryLastRatesIdRequest): Promise<QueryLastRatesIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    RatesResult(request: QueryRatesRequest): Promise<QueryRatesResponse>;
    LastRatesId(request: QueryLastRatesIdRequest): Promise<QueryLastRatesIdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
