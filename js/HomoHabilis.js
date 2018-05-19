export default class HomoHabilis {

  /**
   * @param {String} fullName
   *   The full name of a person.
   * @param {String} birthday
   *   The day when the person was born.
   * @param {String} gender
   *   The gender of the person.
   */
  constructor(fullName, birthday, gender) {
    this.isMale = gender === 'male';
    this.fullName = fullName;
    this.birthday = new Date(birthday);
    this.storage = Object.create(null);

    // The properties are unmodifiable.
    Object.freeze(this);
  }

  toString() {
    return this.fullName;
  }

  async getFood() {
    this.is('eating');
  }

  async goSleep() {
    this.is('falling asleep');
  }

  async wakeUp() {
    this.is('waking up');
  }

  /**
   * @param {Date} date
   *   The date to check for person's birthday.
   *
   * @return {Boolean}
   *   The state.
   */
  isBirthday(date) {
    return (
      date.getMonth() === this.birthday.getMonth() &&
      date.getDate() === this.birthday.getDate()
    );
  }

  /**
   * @param {String} message
   *   The action message to expose (can contain "%s" placeholders).
   * @param {...*} args
   *   The arguments to replace placeholders.
   */
  is(message, ...args) {
    if (args.length > 0) {
      message = message.replace(/%s/g, () => {
        const arg = args.shift();

        if (Array.isArray(arg)) {
          // Create a local copy of an array.
          const items = arg.slice();
          const lastItem = items.pop();

          return (items.length > 0 ? `${items.join(', ')} and ` : '') + lastItem;
        }

        return arg;
      });
    }

    /* eslint-disable-next-line no-console */
    console.log(`${this} is ${message}...`);
  }

}
