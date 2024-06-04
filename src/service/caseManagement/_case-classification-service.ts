import http from "../api/http";
import type { ApiResponse } from "@/models/api-response";

/**
 * @description 問題分類管理:案件分類/取得案件分類
 * @returns
 */
export const getCaseCategory = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>("/api/category/get", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("getCaseCategory error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類/取得案件分類分頁清單
 * @returns
 */
export const getCaseCategoryList = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>("/api/category/getList", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("getCaseCategoryList error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類/取得案件分類選項清單
 * @returns
 */
export const getCaseCategoryOption = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>(
      "/api/category/getOptions",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("getCaseCategoryOption error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類/新增案件分類
 * @returns
 */
export const addCaseCategory = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>("/api/category/create", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("addCaseCategory error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類/刪除案件分類
 * @returns
 */
export const deleteCaseCategory = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>("/api/category/create", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("deleteCaseCategory error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類/修改案件分類
 * @returns
 */
export const updateCaseCategory = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>("/api/category/update", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("updateCaseCategory error: ", error);
    return null;
  }
};

/**
 * @description 問題分類管理:案件分類項目/取得案件分類
 * @returns
 */
export const getCasecategoryItem = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>("/api/categoryItem/get", {
      params: searchData,
    });
    return response.data;
  } catch (error) {
    console.error("getCasecategoryItem error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類項目/取得案件分類分頁清單
 * @returns
 */
export const getCasecategoryItemList = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>(
      "/api/categoryItem/getList",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("getCasecategoryItemList error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類項目/取得案件分類選項清單
 * @returns
 */
export const getCasecategoryItemOption = async (searchData: any) => {
  try {
    const response = await http.get<ApiResponse<any>>(
      "/api/categoryItem/getOptions",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("getCasecategoryItemOption error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類項目/新增案件分類
 * @returns
 */
export const addCasecategoryItem = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>(
      "/api/categoryItem/create",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("addCasecategoryItem error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類項目/刪除案件分類
 * @returns
 */
export const deleteCasecategoryItem = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>(
      "/api/categoryItem/delete",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("deleteCasecategoryItem error: ", error);
    return null;
  }
};
/**
 * @description 問題分類管理:案件分類項目/修改案件分類
 * @returns
 */
export const updateCasecategoryItem = async (searchData: any) => {
  try {
    const response = await http.post<ApiResponse<any>>(
      "/api/categoryItem/update",
      {
        params: searchData,
      }
    );
    return response.data;
  } catch (error) {
    console.error("updateCasecategoryItem error: ", error);
    return null;
  }
};
