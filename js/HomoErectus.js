import HomoHabilis from './HomoHabilis.js';

export default class HomoErectus extends HomoHabilis {
  /**
   * @param {String} reason
   *   The reason of the walk.
   */
  async walkUpright(reason = 'walking') {
    this.is(reason);
  }
}
