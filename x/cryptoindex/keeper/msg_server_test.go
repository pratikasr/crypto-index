package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/pratikasr/crypto-index/testutil/keeper"
	"github.com/pratikasr/crypto-index/x/cryptoindex/keeper"
	"github.com/pratikasr/crypto-index/x/cryptoindex/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CryptoindexKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
