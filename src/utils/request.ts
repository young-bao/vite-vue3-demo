import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {},
  (onRejected) => {}
);
instance.interceptors.response.use(
  (config) => {},
  (onRejected) => {}
);

interface UserAxiosRequestConfig extends AxiosRequestConfig {}

interface BaseResponse<T = any> {
  code: number;
  data: T;
  msg: string;
}

const request = <T = any>(
  config: UserAxiosRequestConfig
): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    return instance
      .request<BaseResponse<T>>(config)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export default instance;
