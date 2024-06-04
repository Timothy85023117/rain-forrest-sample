import http from "../api/http";
import type { ApiResponse } from "@/models/api-response";
/**
 * @description 新聞與名單管理下拉選單
 * @returns
 */
export const getNegativeNewsList = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>(
      "/risk-overview/negative-news-list",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("getNegativeNewsList error: ", error);
    return null;
  }
};
