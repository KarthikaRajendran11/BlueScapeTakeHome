const { I, contactPage } = inject();
const constants = require('../constant.js');

module.exports = {

  fields: {
    name: 'Name',
    email: 'Email',
    website: 'Website',
    date: 'Date',
    submit: 'Submit'
  },

  navigateToPage() {
    I.amOnPage(constants.Url);
    I.amOnPage(constants.Path);
  },

  fillAllFields() {
    I.fillField(this.fields.name, constants.Name);
    I.fillField(this.fields.email, constants.Email);
    I.fillField(this.fields.website, constants.Website);
    I.scrollPageToBottom();
    I.click(this.fields.date);
    I.click(I.getDay());
  },

  fillOnlyRequiredFields() {
    I.fillField(this.fields.name, constants.Name);
    I.fillField(this.fields.email, constants.Email);
    I.click(this.fields.date);
    I.click(I.getDay());
  },

  leaveOutName() {
    I.fillField(this.fields.email, constants.Email);
    I.click(this.fields.date);
    I.click(I.getDay());
  },

  leaveOutEmail() {
    I.fillField(this.fields.name, constants.Name);
    I.click(this.fields.date);
    I.click(I.getDay());
  },
  
  leaveOutDate() {
    I.fillField(this.fields.name, constants.Name);
    I.fillField(this.fields.email, constants.Email);
  },

  submitForm() {
    I.forceClick(this.fields.submit);
  }
}
