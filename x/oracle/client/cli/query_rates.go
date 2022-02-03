package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/pratikasr/crypto-index/x/oracle/types"
	"github.com/spf13/cobra"
)

// CmdRatesResult queries request result by reqID
func CmdRatesResult() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "rates-result [request-id]",
		Short: "Query the Rates result data by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			id, err := strconv.ParseInt(args[0], 10, 64)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.RatesResult(context.Background(), &types.QueryRatesRequest{RequestId: id})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

// CmdLastRatesID queries latest request
func CmdLastRatesID() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "last-rates-id",
		Short: "Query the last request id returned by Rates ack packet",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.LastRatesId(context.Background(), &types.QueryLastRatesIdRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
