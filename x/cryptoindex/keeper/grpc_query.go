package keeper

import (
	"github.com/pratikasr/crypto-index/x/cryptoindex/types"
)

var _ types.QueryServer = Keeper{}
