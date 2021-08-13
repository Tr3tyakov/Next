module.exports = class userDto {
  id;
  email;
  skills;
  mainInfo;
  desiredPosition;
  desiredPay;
  specializations;

  constructor({ _id, mainInfo, email, skills, specializations, desiredPay, desiredPosition }) {
    (this.id = _id),
      (this.skills = skills),
      (this.mainInfo = mainInfo),
      (this.email = email),
      (this.desiredPosition = desiredPosition),
      (this.desiredPay = desiredPay),
      (this.specializations = specializations);
  }
};
