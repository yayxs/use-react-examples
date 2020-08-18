import RequestUtils from '../utils/request';
import userApi from '../api/user';
class UserServices extends RequestUtils {
  constructor() {
    super();
  }
  static async loginApi(params) {
    return await this.post(userApi.LOGIN, params);
  }
}

export default UserServices;
