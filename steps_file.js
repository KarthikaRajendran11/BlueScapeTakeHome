const _ = require('lodash');
const moment = require('moment');

module.exports = function() {
  return actor({

    getDay: () => {
      const _date = moment().format('DD-mm-yyyy').toString();
      return _.split(_date, '-')[0];
    },

    getDate: () => {
      return moment().format('LL').toString();
    }

  });

  
}
