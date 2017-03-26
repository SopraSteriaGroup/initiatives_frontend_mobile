import Dimensions from 'Dimensions'

const SCREEN_WIDTH = Dimensions.get('window').width,
const SCREEN_HEIGHT = Dimensions.get('window').height,

export default class DisplayUtils {
  static getScreenSize(){
    return {width: SCREEN_WIDTH, height: SCREEN_HEIGHT};
  }
}
