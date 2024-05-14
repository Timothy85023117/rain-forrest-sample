import router from "@/router";
import axios, { type AxiosError } from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  withCredentials: false,
});

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("axios - interceptors - response - error:", error);
    if (error.response) {
      // TODO: 依據 api 規格與需求，針對 status code 執行對應程式(401、403…等)
      switch (error.response.status) {
        case 401:
          router.push("/login");
          break;
      }
    }
    if (error.code === "ECONNABORTED") {
      // api 請求超時，修改其錯誤訊息
      error.message = "timeout 系統無回應";
    }
    return Promise.reject(error);
  }
);

export default http;
