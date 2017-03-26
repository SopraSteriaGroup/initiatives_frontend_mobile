import Axios from 'axios';
import APIConfig from '../../../../../configs/APIConfig';

export default {
    findById : function(id){
      //let result = Axios.get(APIConfig.FRA.userInformationEndPoint);
      let result = Axios.get(APIConfig['GITHUB_CYRIL'].base + APIConfig['GITHUB_CYRIL'].userInformationEndPoint);
      console.log(result);
      return {
        result : result,
        cancelToken : null,
        source : null,
      }
    }
}
