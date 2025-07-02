import { _OrderRequestApi } from "@/services/orderRequest/orderRequest.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QueryKeys } from "../../utils/queryKeys";

import { salesOrderFormValues } from "@/types/salesOrder/salesOrder";
import { _SalesOrderApi } from "@/services/salesOrder/salesOrder.service";
import { recivingItemsFormValues } from "@/types/recivingItems/recivingItems";
import { _RecivingItemsApi } from "@/services/RecivingItems/recivingItems.service";

// FETCH RECIVING ITEMS
export const useFetchRecivingItems = () => {
  return useQuery({
    queryKey: [QueryKeys.RecivingItems],
    queryFn: _RecivingItemsApi.getRecivingItems,
  });
};

// FETCH RECIVING ITEM
export const useFetchRecivingItem = (id: number | null, options = {}) => {
  return useQuery({
    queryKey: [QueryKeys.RecivingItem, id],
    queryFn: () => _RecivingItemsApi.getRecivingItem(id),
    enabled: !!id,
    ...options,
  });
};

// FETCH RECIVING ITEMS Not Converted
export const useFetchRecivingItemsNotConverted = (params: { contactId?: number | null, accountId?: number | null }) => {
  
  const queryParams = {
    contactId: params.contactId ?? undefined,
    accountId: params.accountId ?? undefined,
  };

  return useQuery({
    queryKey: [QueryKeys.RECIVING_ITEMS_NOT_CONVERTED, queryParams],
    queryFn: () => _RecivingItemsApi.getRecivingItemsNotConverted(queryParams.contactId, queryParams.accountId),
  });
};

// FETCH RECIVING ITEMS LINES
export const useFetchRecivingItemsLines = (
  params: Record<string, string | number> | undefined) => {
  return useQuery({
    queryKey: [QueryKeys.RECIVING_ITEMS_LINES, params],
    queryFn: () => _RecivingItemsApi.getRecivingItemsLines(params ?? {}),
    enabled: !!params && Object.keys(params).length > 0,
  });
};

// CREATE RECIVING ITEM
export const useCreateRecivingItem = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: _RecivingItemsApi.createRecivingItem,
    onSuccess: () => {
      navigate("/reciving-items");
    },
  });
};

// UPDATE RECIVING ITEM
export const useUpdateRecivingItems = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number | undefined;
      data: recivingItemsFormValues;
    }) => _RecivingItemsApi.updateRecivingItem(id!, data),
    onSuccess: () => {
      navigate("/reciving-items");
    },
  });
};

// DELETE RECIVING ITEM
export const useDeleteRecivingItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: _RecivingItemsApi.deleteRecivingItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.RecivingItem],
      });
    },
  });
};
