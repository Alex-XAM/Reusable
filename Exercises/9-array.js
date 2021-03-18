'use strict';

const phonebook = [
  { name: 'Alex', phone: '+7 999-111-11-11' },
  { name: 'Ivan', phone: '+7 999-111-22-22' },
  { name: 'Oleg', phone: '+7 999-111-33-33' }
];

const findPhoneByName = name => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
