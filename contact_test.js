const constants = require('./constant');
const { isElement } = require('lodash');

Feature('Contact Page');

Before((I) => {
   I.amOnPage(constants.Url);
   I.amOnPage(constants.Path);
});

Scenario('Fill in all fields', (I, contactPage, Data) => {
   contactPage.fillAllFields();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact/?contact-form-id=7');
   I.see('Name: ' + Data.Name);
   I.see('Email: ' + Data.Email);
   I.see('Website: ' + Data.Website);
   I.see('Date: ' + I.getDate());
}).injectDependencies({Data : require('./constant.js')});

Scenario('Fill in required fields', (I, contactPage, Data) => {
   contactPage.fillOnlyRequiredFields();
   contactPage.submitForm();
   I.seeInCurrentUrl('/contact/?contact-form-id=7');
   I.see('Name: ' + Data.Name);
   I.see('Email: ' + Data.Email);
   I.see('Date: ' + I.getDate());
}).injectDependencies({Data : require('./constant.js')});

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