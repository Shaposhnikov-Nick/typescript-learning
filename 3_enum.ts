enum Membership {
  Simple,
  Standart,
  Premium,
}

// числовое значение
const membership = Membership.Standart;
console.log(membership); // 1

// строковое значение
const membership2 = Membership[2];
console.log(membership2); // Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FB",
}

const social = SocialMedia.FACEBOOK;
console.log(social); // FB
