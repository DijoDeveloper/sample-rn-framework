import ApiConfig from '../config/api-config';
import {apiClient} from '../services/client';

export default function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.LOGIN, {username, password});
}
