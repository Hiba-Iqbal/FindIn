import { isValidPhoneNumber} from "react-phone-input-international";
// import {validator as commonValidatior} from "validator";
const emailRule = [
  {
    type: "email",
    message: "Please enter your valid email",
  },
  {
    required: true,
    message: "Please enter your email",
  },
];
const phoneRule = [
  {
    required: true,
    message: "Please enter your phone number",
  },
  {
    // pattern: new RegExp(/^[0-9]+[0-9]*$/i),
    // pattern: new RegExp(/^[0-9]{10}$/i),
    pattern: new RegExp(/^\d{9,}(?:,\d{9,})*$/),
    message: "field accept only numbers",
  },
];
const urlRule = [
  {
    required: true,
    message: "Please enter your website",
  },
  {
    pattern: new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm),
    message: "field accept only urls",
  },
];
const companyRule = [
  {
    required: true,
    message: "Please enter company name",
  },
];
const nameRule = [
  {
    required: true,
    message: "Please enter name",
  },
];
const fullNameRule = [
  {
    required: true,
    message: "Please enter full name",
  },
  {
    pattern: new RegExp(/^[a-zA-Z ]+$/i),
    message: "field does not accept special characters and numbers",
  },
];
const firstNameRule = [
  {
    required: true,
    message: "Please enter your first name",
  },
  {
    pattern: new RegExp(/^[a-zA-Z ]+$/i),
    message: "Not a valid name",
  },
];
export const middleNameRule = [
  {
    required: false,
    message: "Please enter your middle name",
  },
  {
    pattern: new RegExp(/^[a-zA-Z ]+$/i),
    message: "Not a valid name",
  },
];
const lastNameRule = [
  {
    required: true,
    message: "Please enter your last name",
  },
  {
    pattern: new RegExp(/^[a-zA-Z ]+$/i),
    message: "Not a valid name",
  },
];

const passwordRule = [
  {
    required: true,
    message: "Please enter password",
  },
  { min: 8, message: "please enter at least 8 digit password" },
];

const confirmPasswordRule = [
  {
    required: true,
    message: "Please confirm your password",
  },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject("Password does not match");
    },
  }),
];

const idRule = [
  {
    required: true,
    message: "Please enter Id number",
  },
];
const timeRule = [
  {
    type: "object",
    required: true,
    message: "Please select time",
  },
];
const dateRule = [
  {
    type: "object",
    required: true,
    message: "Please select time",
  },
];
const typeRule = [
  {
    required: true,
    message: "Please select a type",
  },
];

const roleRule = [
  {
    required: true,
    message: "Please select role",
  },
];
const commentRule = [
  {
    required: true,
    message: "Please enter comment",
  },
];

const genderRule = [
  {
    required: true,
    message: "Please select gender",
  },
];

const otpRule = [
  {
    required: true,
    message: "Please enter otp",
  },
  { min: 4, message: "Please enter must be minimum 4 digits." },
];

const requiredRule = [
  {
    required: true,
    message: "This field is required",
  },
];

const paginationLimit = 8;

export {
  emailRule,
  phoneRule,
  urlRule,
  nameRule,
  firstNameRule,
  lastNameRule,
  passwordRule,
  confirmPasswordRule,
  idRule,
  timeRule,
  dateRule,
  typeRule,
  roleRule,
  otpRule,
  genderRule,
  companyRule,
  fullNameRule,
  commentRule,
  paginationLimit,
  requiredRule,
};

// Can be use in maintanence phase
// const commonValidatePhoneNumber = (number) => {
//   const isValidPhoneNumber = commonValidatior.isMobilePhone(number)
//   return (isValidPhoneNumber)
//  }

// const validatePhoneNumber = [
//   {
//     required: true,
//     message: "Please enter your phone number",
//   },
//   ({ getFieldValue }) => ({
//     validator(rule, value) {
//       if (commonValidatePhoneNumber(getFieldValue('companyPhone'))) {
//         console.log(getFieldValue('companyPhone'))
//         return Promise.resolve();
//       }
//       else {
//         console.log("Match nh hoa",getFieldValue('companyPhone'))

//       }
//       return Promise.reject("field accept only numbers");
//     },
//   }),
// ];
