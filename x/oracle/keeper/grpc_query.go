package keeper

import (
	"github.com/pratikasr/crypto-index/x/oracle/types"
)

var _ types.QueryServer = Keeper{}
