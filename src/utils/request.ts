import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

const Api: AxiosInstance = axios.create({
  timeout: 3000,
  baseURL: "/ytb",
});

Api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response: AxiosResponse) => {
    const {
      data: { code, data },
    } = response;

    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  get<T = any>(url: string, options?: InternalAxiosRequestConfig): Promise<T> {
    return Api.get(url, options);
  },
  post<T = any>(
    url: string,
    data: Object,
    options?: InternalAxiosRequestConfig
  ): Promise<T> {
    return Api.post(url, data, options);
  },
};
