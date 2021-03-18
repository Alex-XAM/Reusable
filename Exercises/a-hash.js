'use strict';

const phonebook = {
  Alex: { phone: '+7 999-111-11-11' },
  Ivan: { phone: '+7 999-111-22-22' },
  Oleg: { phone: '+7 999-111-33-33' }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
