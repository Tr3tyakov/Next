module.exports = class userDto {
  id;
  email;

  constructor(user) {
    (this.id = user._id), (this.email = user.email);
  }
};
