import RequestUtils from '../utils/request';
import listApi from '../api/list/index';
class ListServices extends RequestUtils {
  constructor() {
    super();
  }
  static async getListApi(params) {
    return await this.get(listApi.GET_LIST, params);
  }
}

export default ListServices;
