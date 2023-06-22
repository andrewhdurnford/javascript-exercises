const findTheOldest = function (people) {
  let oldestage = 0;
  let oldestperson = "Bob";
  let age = 0;

  people.forEach((person) => {
    if (person.yearOfDeath === undefined) {
      age = new Date().getFullYear() - person.yearOfBirth;
      if (age > oldestage) {
        oldestperson = person;
        oldestage = age;
      }
    } else if (person.yearOfDeath - person.yearOfBirth > oldestage) {
      oldestage = person.yearOfDeath - person.yearOfBirth;
      oldestperson = person;
    }
  });
  return oldestperson;
};

// Do not edit below this line
module.exports = findTheOldest;
