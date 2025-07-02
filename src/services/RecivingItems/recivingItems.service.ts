import { _axios } from "@/interceptor/http-config";
import type { ApiResponse, OrderRequestFormValues } from "@/types/orderRequest/orderRequest";
import { salesOrderFormValues } from "@/types/salesOrder/salesOrder";
import { recivingItemsFormValues } from '@/types/recivingItems/recivingItems';



export const _RecivingItemsApi = {
  // GET ALL RECIVING ITEMS
  getRecivingItems: async (): Promise<
    ApiResponse<recivingItemsFormValues[]>
  > => {
    const response = await _axios.get<ApiResponse<recivingItemsFormValues[]>>(
      "/reciving-items"
    );
    return response.data;
  },

  // GET SINGLE RECIVING ITEM
  getRecivingItem: async (
    id: number | null
  ): Promise<ApiResponse<recivingItemsFormValues>> => {
    const response = await _axios.get<ApiResponse<recivingItemsFormValues>>(
      `/reciving-items/${id}`
    );
    return response.data;
  },

  // GET ALL RECIVING ITEMS Not Converted
  getRecivingItemsNotConverted: async (
    contactId?: number | null,
    accountId?: number | null
  ): Promise<ApiResponse<recivingItemsFormValues[]>> => {
    const params = new URLSearchParams();

    if (contactId != null) params.append("contact_id", contactId.toString());
    if (accountId != null) params.append("account_id", accountId.toString());

    const response = await _axios.get<ApiResponse<recivingItemsFormValues[]>>(
      `/reciving-items/not-converted/reciving-items?${params.toString()}`
    );
    return response.data;
  },

  // GET RECIVING ITEMS LINES BY IDS
  getRecivingItemsLines: async (
    params: Record<string, string | number>
  ): Promise<ApiResponse<any>> => {
    const formData = new FormData();

    Object.entries(params).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const response = await _axios.post<ApiResponse<any>>(
      "/reciving-items/reciving-items-lines",
      formData
    );

    return response.data;
  },

  // CREATE RECIVING ITEM
  createRecivingItem: async (
    data: recivingItemsFormValues
  ): Promise<ApiResponse<recivingItemsFormValues>> => {
    const response = await _axios.post<ApiResponse<recivingItemsFormValues>>(
      "/reciving-items",
      data
    );
    return response.data;
  },

  // UPDATE RECIVING ITEM
  updateRecivingItem: async (
    id: number,
    data: recivingItemsFormValues
  ): Promise<ApiResponse<recivingItemsFormValues>> => {
    const response = await _axios.post<ApiResponse<recivingItemsFormValues>>(
      `/reciving-items/${id}`,
      data
    );
    return response.data;
  },

  // DELETE RECIVING ITEM
  deleteRecivingItem: async (
    id: number
  ): Promise<ApiResponse<{ success: boolean }>> => {
    const response = await _axios.delete<ApiResponse<{ success: boolean }>>(
      `/reciving-items/${id}`
    );
    return response.data;
  },

  // APPROVE/REJECT RECIVING ITEM
  approveRecivingItem: async (data: {
    sale_order_id: number;
    action: "approve" | "reject";
    notes?: string;
  }): Promise<ApiResponse<recivingItemsFormValues>> => {
    const response = await _axios.post<ApiResponse<recivingItemsFormValues>>(
      `/reciving-items/${data.sale_order_id}/approval`,
      data
    );
    return response.data;
  },
};
