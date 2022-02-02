package cryptoindex_test

import (
	"testing"

	keepertest "github.com/pratikasr/crypto-index/testutil/keeper"
	"github.com/pratikasr/crypto-index/testutil/nullify"
	"github.com/pratikasr/crypto-index/x/cryptoindex"
	"github.com/pratikasr/crypto-index/x/cryptoindex/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CryptoindexKeeper(t)
	cryptoindex.InitGenesis(ctx, *k, genesisState)
	got := cryptoindex.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
