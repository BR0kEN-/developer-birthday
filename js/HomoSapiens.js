import HomoErectus from './HomoErectus.js';

export default class HomoSapiens extends HomoErectus {
  /**
   * @inheritDoc
   */
  constructor(fullName, birthday, gender) {
    super(fullName, birthday, gender);

    this.storage.issues = [];
  }

  async thinkWider() {
    this.is('thinking');
  }

  async goToWork() {
    await this.walkUpright('on the way to work');
  }

  async goHome() {
    await this.walkUpright('on the way home');
  }

  /**
   * @param {HomoSapiens[]} people
   *   The list of people attending the celebration.
   * @param {String[]} gifts
   *   The list of gifts presented to the person for a birthday.
   */
  celebrateBirthday(people, gifts) {
    this.is('celebrating birthday along with %s who gave %s %s', people, this.isMale ? 'him' : 'her', gifts);
  }

  /**
   * @param {String} target
   *   The kind of work.
   * @param {Error} [issue]
   *   The issue being faced while doing the work.
   */
  async doWork(target, issue = null) {
    await this.thinkWider();
    this.is(target);

    if (issue !== null) {
      if (!this.storage.issues[issue]) {
        throw issue;
      }

      this.is('successfully resolved the latest issue with help of %s', this.storage.issues[issue]);
    }
  }

  /**
   * @param {Error} issue
   *   The reason the help is being requested.
   * @param {HomoSapiens} people
   *   The list of people from whom help is required.
   */
  async requestHelp(issue, ...people) {
    this.storage.issues[issue] = people;

    this.is('requesting help of %s because %s', people, issue.message);
  }
}
