package keeper_test

import (
	"testing"

	testkeeper "github.com/pratikasr/crypto-index/testutil/keeper"
	"github.com/pratikasr/crypto-index/x/cryptoindex/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CryptoindexKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
