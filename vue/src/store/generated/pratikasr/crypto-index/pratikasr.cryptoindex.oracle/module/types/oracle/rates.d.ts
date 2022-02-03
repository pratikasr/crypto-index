import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "pratikasr.cryptoindex.oracle";
export interface RatesCallData {
    symbols: string[];
    multiplier: number;
}
export interface RatesResult {
    rates: number[];
}
export declare const RatesCallData: {
    encode(message: RatesCallData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RatesCallData;
    fromJSON(object: any): RatesCallData;
    toJSON(message: RatesCallData): unknown;
    fromPartial(object: DeepPartial<RatesCallData>): RatesCallData;
};
export declare const RatesResult: {
    encode(message: RatesResult, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RatesResult;
    fromJSON(object: any): RatesResult;
    toJSON(message: RatesResult): unknown;
    fromPartial(object: DeepPartial<RatesResult>): RatesResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
