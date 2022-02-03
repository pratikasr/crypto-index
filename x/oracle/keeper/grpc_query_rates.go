package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/pratikasr/crypto-index/x/oracle/types"
)

// RatesResult returns the Rates result by RequestId
func (k Keeper) RatesResult(c context.Context, req *types.QueryRatesRequest) (*types.QueryRatesResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	result, err := k.GetRatesResult(ctx, types.OracleRequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	return &types.QueryRatesResponse{Result: &result}, nil
}

// LastRatesId returns the last Rates request Id
func (k Keeper) LastRatesId(c context.Context, req *types.QueryLastRatesIdRequest) (*types.QueryLastRatesIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := k.GetLastRatesID(ctx)
	return &types.QueryLastRatesIdResponse{RequestId: id}, nil
}
