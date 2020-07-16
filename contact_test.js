const constants = require('./constant');
const constant = require('./constant');
const { isElement } = require('lodash');

Feature('Contact Page');

Before((I) => {
   I.amOnPage(constants.Url);
   I.amOnPage(constants.Path);
});

Scenario('Fill in all fields', (I, contactPage) => {
   contactPage.fillAllFields();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact/?contact-form-id=7');
   I.see('Name: ' + constants.Name);
   I.see('Email: ' + constants.Email);
   I.see('Website: ' + constants.Website);
   I.see('Date: ' + I.getDate());
});

Scenario('Fill in required fields', (I, contactPage) => {
   contactPage.fillOnlyRequiredFields();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact/?contact-form-id=7');
   I.see('Name: ' + constants.Name);
   I.see('Email: ' + constants.Email);
   I.see('Date: ' + I.getDate());
});

Scenario('Leave out required field - name', (I, contactPage) => {
   contactPage.leaveOutName();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact');
});

Scenario('Leave out required field - email', (I, contactPage) => {
   contactPage.leaveOutEmail();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact');
});

Scenario('Leave out required field - date', (I, contactPage) => {
   contactPage.leaveOutDate();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact');
});

Scenario('Test Go back option', (I, contactPage) => {
   contactPage.fillAllFields();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact/?contact-form-id=7');
   I.click('go back');
   I.seeInCurrentUrl('/contact');
});