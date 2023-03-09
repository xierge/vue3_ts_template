import Api from "@/utils/request";
import { IUserInfo } from "@/store/user";

export const login = (data: { username: string; password: string }) =>
  Api.post<IUserInfo>("/v1/login", data);
