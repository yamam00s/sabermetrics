import axios from 'axios'

export default class ApiRequester {
  /**
   * creates an instance of ApiRequester.
   * @memberof ApiRequester
   */
  constructor(requestTargetUrl) {
    this.targetUrl = requestTargetUrl
  }

  fetchJsonDataList() {
    return axios.get(this.targetUrl).then(res => res)
  }
}
