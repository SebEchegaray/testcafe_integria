import { Selector } from 'testcafe';
import Helpers from './Helpers';

fixture`Register Form`
  // .page`https://mediherb.com.au/en-au`;
  .page`https://staging-uc.mediherb.com.au/en-au/`;

test
    .before(async (t) => {
        await t
            .maximizeWindow();
    })
    ('ReggisterForm', async (t) => {
      
      await Helpers.completeSiteSecurityPrompt();

      await Helpers.getIntoRegistrationForm();  // Going from homepage to Registration Form

      const totalSteps = await Selector(".css-70qvj9").count;  // Global Variable for checking steps done/left

      await Helpers.stepsLeftCheck(totalSteps);  // Check how many steps are done and how many left. 5 all up in this case
      await Helpers.stepCheck(0, "1", "Let\'s get started");  // Checking step numer matches the text in DOM for Step 1 of Rego

      await Helpers.firstStepInvalidEmail();  // Testing first step with an invalid email address
      await Helpers.firstStepValidEmail();  // Testing first step with a valid email address
      
      await Helpers.stepsLeftCheck(totalSteps);  // Check how many steps are done and how many left
      await Helpers.stepCheck(1, "2", "Your Personal details");  // Checking step numer matches the text in DOM for Step 2 of Rego

      await Helpers.blankFieldErrorMsg();

      // const yourTitle = await Selector("#title");
      // const firstName = await Selector("#firstName");
      // const lastName = await Selector("#lastName");
      // const maleGender = await Selector(".css-wybz1a")
      //   .child(".css-fzwid6")
      //   .nth(0);
      // const femaleGender = await Selector(".css-wybz1a")
      //   .child(".css-fzwid6")
      //   .nth(1);
      // const otherGender = await Selector(".css-wybz1a")
      //   .child(".css-fzwid6")
      //   .nth(2);
      // const previousBtn = await Selector("button").withAttribute("type", "button");
      // const secondStepBtn = await Selector("button").withAttribute("type", "submit");

      // await t
      //   .click(yourTitle)
      //   .pressKey("down")
      //   .pressKey("enter")
      //   .click(firstName)
      //   .typeText(firstName, "Firstname")
      //   .click(lastName)
      //   .typeText(lastName, "Lastname")
      //   .click(maleGender)
      //   .wait(300)
      //   .click(femaleGender)
      //   .wait(300)
      //   .click(otherGender)
      //   .wait(300)
      //   .click(maleGender)
      //   .click(previousBtn)

      // // Check how many steps are done and how many left
      // await Helpers.stepsLeftCheck(totalSteps)

      // // Checking first step numer matches the text in DOM
      // await Helpers.stepCheck(0, "1", "Let\'s get started")

      // await t
      //   .click(firstStepBtn) // Back to second step

      //   // Re-filling form
      //   .click(yourTitle)
      //   .pressKey("down")
      //   .pressKey("enter")
      //   .click(firstName)
      //   .typeText(firstName, "Firstname")
      //   .click(lastName)
      //   .typeText(lastName, "Lastname")
      //   .click(maleGender)
      //   .wait(300)
      //   .click(femaleGender)
      //   .wait(300)
      //   .click(otherGender)
      //   .wait(300)
      //   .click(maleGender)

      //   // Jump to thrid step
      //   .click(secondStepBtn)
      //   .wait(500);

      // // Check how many steps are done and how many left
      // await Helpers.stepsLeftCheck(totalSteps)

      // // Checking step numer matches the text in DOM
      // await Helpers.stepCheck(2, "3", "Your professional details")

      // const professionalDetails = await Selector(".css-wybz1a")
      //   .child(".css-fzwid6")
      //   .nth(0)
      // const studentDetails = await Selector(".css-wybz1a")
      //   .child(".css-fzwid6")
      //   .nth(1)
      // const thirdStepBtn = await Selector("button").withAttribute("type", "submit")

      // await t
      //   .click(studentDetails)
      //   .click(professionalDetails)
      //   .click(thirdStepBtn)
      //   .wait(500);

      // // Check how many steps are done and how many left
      // await Helpers.stepsLeftCheck(totalSteps)

      // // Checking step numer matches the text in DOM
      // await Helpers.stepCheck(3, "4", "Your professional details")
      
      // const professionSelect = await Selector("select").withAttribute("name", "profession")
      // const qualificationInput = await Selector("input").withAttribute("name", "qualification")
      // const proAssocSelect = await Selector("select").withAttribute("name", "professionalAssociation")
      // const proAssocNumber = await Selector("input").withAttribute("name", "professionalAssociationNumber")
      // const businessName = await Selector("input").withAttribute("name", "businessName")
      // const businessWebsite = await Selector("input").withAttribute("name", "businessWebsite")
      // const fourthStepBtn = await Selector("button").withAttribute("type", "submit");

      // await t
      //   .click(professionSelect)
      //   .pressKey("down")
      //   .pressKey("down")
      //   .pressKey("down")
      //   .pressKey("down")
      //   .pressKey("enter")
      //   .click(qualificationInput)
      //   .typeText(qualificationInput, "Bachelor Degree Physiotherapist")
      //   .click(proAssocSelect)
      //   .pressKey("down")
      //   .pressKey("enter")
      //   .click(proAssocNumber)
      //   .typeText(proAssocNumber, "123456789")
      //   .click(businessName)
      //   .typeText(businessName, "BusinessName")
      //   .click(businessWebsite)
      //   .typeText(businessWebsite, "www.business.com.au")
      //   .click(fourthStepBtn)
      //   .wait(500)

      // const phoneNumber = await Selector("input").withAttribute("name", "phoneNumber")
      // const address = await Selector("input").withAttribute("name", "fullAddress")

      // // Check how many steps are done and how many left
      // await Helpers.stepsLeftCheck(totalSteps)

      // // Checking step numer matches the text in DOM
      // await Helpers.stepCheck(4, "5", "Your Contact Details")

      // await t
      //   .click(phoneNumber)
      //   .typeText(phoneNumber, "0444444444")
      //   .click(address)
      //   .typeText(address, "4 Dandarriga Way, Delahe")
      //   .wait(1000)
      //   .pressKey("down")
      //   .pressKey("enter")
      //   .wait(2000)
    })
