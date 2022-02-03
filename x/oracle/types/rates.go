package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRatesData = "rates_data"

var (
	_ sdk.Msg = &MsgRatesData{}

	// RatesResultStoreKeyPrefix is a prefix for storing result
	RatesResultStoreKeyPrefix = "rates_result"

	// LastRatesIDKey is the key for the last request id
	LastRatesIDKey = "rates_last_id"

	// RatesClientIDKey is query request identifier
	RatesClientIDKey = "rates_id"
)

// NewMsgRatesData creates a new Rates message
func NewMsgRatesData(
	creator string,
	oracleScriptID OracleScriptID,
	sourceChannel string,
	calldata *RatesCallData,
	askCount uint64,
	minCount uint64,
	feeLimit sdk.Coins,
	prepareGas uint64,
	executeGas uint64,
) *MsgRatesData {
	return &MsgRatesData{
		ClientID:       RatesClientIDKey,
		Creator:        creator,
		OracleScriptID: uint64(oracleScriptID),
		SourceChannel:  sourceChannel,
		Calldata:       calldata,
		AskCount:       askCount,
		MinCount:       minCount,
		FeeLimit:       feeLimit,
		PrepareGas:     prepareGas,
		ExecuteGas:     executeGas,
	}
}

// Route returns the message route
func (m *MsgRatesData) Route() string {
	return RouterKey
}

// Type returns the message type
func (m *MsgRatesData) Type() string {
	return TypeMsgRatesData
}

// GetSigners returns the message signers
func (m *MsgRatesData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes returns the signed bytes from the message
func (m *MsgRatesData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(m)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic check the basic message validation
func (m *MsgRatesData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if m.SourceChannel == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid source channel")
	}
	return nil
}

// RatesResultStoreKey is a function to generate key for each result in store
func RatesResultStoreKey(requestID OracleRequestID) []byte {
	return append(KeyPrefix(RatesResultStoreKeyPrefix), int64ToBytes(int64(requestID))...)
}
