/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../oracle/params";
import { RatesResult } from "../oracle/rates";

export const protobufPackage = "pratikasr.cryptoindex.oracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryLastRatesIdRequest {}

export interface QueryLastRatesIdResponse {
  requestId: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryRatesRequest: object = { requestId: 0 };

export const QueryRatesRequest = {
  encode(message: QueryRatesRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRatesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRatesRequest } as QueryRatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRatesRequest {
    const message = { ...baseQueryRatesRequest } as QueryRatesRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId);
    } else {
      message.requestId = 0;
    }
    return message;
  },

  toJSON(message: QueryRatesRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRatesRequest>): QueryRatesRequest {
    const message = { ...baseQueryRatesRequest } as QueryRatesRequest;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = 0;
    }
    return message;
  },
};

const baseQueryRatesResponse: object = {};

export const QueryRatesResponse = {
  encode(
    message: QueryRatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== undefined) {
      RatesResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryRatesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRatesResponse } as QueryRatesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = RatesResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRatesResponse {
    const message = { ...baseQueryRatesResponse } as QueryRatesResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = RatesResult.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },

  toJSON(message: QueryRatesResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result
        ? RatesResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryRatesResponse>): QueryRatesResponse {
    const message = { ...baseQueryRatesResponse } as QueryRatesResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = RatesResult.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
};

const baseQueryLastRatesIdRequest: object = {};

export const QueryLastRatesIdRequest = {
  encode(_: QueryLastRatesIdRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLastRatesIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastRatesIdRequest,
    } as QueryLastRatesIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryLastRatesIdRequest {
    const message = {
      ...baseQueryLastRatesIdRequest,
    } as QueryLastRatesIdRequest;
    return message;
  },

  toJSON(_: QueryLastRatesIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastRatesIdRequest>
  ): QueryLastRatesIdRequest {
    const message = {
      ...baseQueryLastRatesIdRequest,
    } as QueryLastRatesIdRequest;
    return message;
  },
};

const baseQueryLastRatesIdResponse: object = { requestId: 0 };

export const QueryLastRatesIdResponse = {
  encode(
    message: QueryLastRatesIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastRatesIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastRatesIdResponse,
    } as QueryLastRatesIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastRatesIdResponse {
    const message = {
      ...baseQueryLastRatesIdResponse,
    } as QueryLastRatesIdResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId);
    } else {
      message.requestId = 0;
    }
    return message;
  },

  toJSON(message: QueryLastRatesIdResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastRatesIdResponse>
  ): QueryLastRatesIdResponse {
    const message = {
      ...baseQueryLastRatesIdResponse,
    } as QueryLastRatesIdResponse;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RatesResult defines a rpc handler method for MsgRatesData. */
  RatesResult(request: QueryRatesRequest): Promise<QueryRatesResponse>;
  /** LastRatesId query the last Rates result id */
  LastRatesId(
    request: QueryLastRatesIdRequest
  ): Promise<QueryLastRatesIdResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pratikasr.cryptoindex.oracle.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  RatesResult(request: QueryRatesRequest): Promise<QueryRatesResponse> {
    const data = QueryRatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pratikasr.cryptoindex.oracle.Query",
      "RatesResult",
      data
    );
    return promise.then((data) => QueryRatesResponse.decode(new Reader(data)));
  }

  LastRatesId(
    request: QueryLastRatesIdRequest
  ): Promise<QueryLastRatesIdResponse> {
    const data = QueryLastRatesIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "pratikasr.cryptoindex.oracle.Query",
      "LastRatesId",
      data
    );
    return promise.then((data) =>
      QueryLastRatesIdResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
