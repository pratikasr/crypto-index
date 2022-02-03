package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	gogotypes "github.com/gogo/protobuf/types"
	"github.com/pratikasr/crypto-index/x/oracle/types"
)

// SetRatesResult saves the Rates result
func (k Keeper) SetRatesResult(ctx sdk.Context, requestID types.OracleRequestID, result types.RatesResult) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.RatesResultStoreKey(requestID), k.cdc.MustMarshal(&result))
}

// GetRatesResult returns the Rates by requestId
func (k Keeper) GetRatesResult(ctx sdk.Context, id types.OracleRequestID) (types.RatesResult, error) {
	bz := ctx.KVStore(k.storeKey).Get(types.RatesResultStoreKey(id))
	if bz == nil {
		return types.RatesResult{}, sdkerrors.Wrapf(types.ErrSample,
			"GetResult: Result for request ID %d is not available.", id,
		)
	}
	var result types.RatesResult
	k.cdc.MustUnmarshal(bz, &result)
	return result, nil
}

// GetLastRatesID return the id from the last Rates request
func (k Keeper) GetLastRatesID(ctx sdk.Context) int64 {
	bz := ctx.KVStore(k.storeKey).Get(types.KeyPrefix(types.LastRatesIDKey))
	intV := gogotypes.Int64Value{}
	k.cdc.MustUnmarshalLengthPrefixed(bz, &intV)
	return intV.GetValue()
}

// SetLastRatesID saves the id from the last Rates request
func (k Keeper) SetLastRatesID(ctx sdk.Context, id types.OracleRequestID) {
	store := ctx.KVStore(k.storeKey)
	store.Set(types.KeyPrefix(types.LastRatesIDKey),
		k.cdc.MustMarshalLengthPrefixed(&gogotypes.Int64Value{Value: int64(id)}))
}
