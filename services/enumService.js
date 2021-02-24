// var matching = require('../constants/matching');
// var MATCHING = require('../constants/matching');
// var constants = require('../constants/main');
// var parser = require('../helpers/parser');
// var JOBS = require('../constants/jobs');

// var EnumService = function () {

//     this.fetchAll = function (callback) {
//         var result = {};

//         // new screen for value assessments
//         result.VALUE_ASSESSMENTS_DROPDOWN_DATA = parser.parseValueAssessments(MATCHING.VALUE_ASSESSMENTS);

//         // second screen (What industry are you interested in working in?)
//         result.CURRENT_INDUSTRIES_DROPDOWN_DATA = parser.parseCurrentIndustries(JOBS.CURRENT_INDUSTRIES);

//         // third screen (What is your current area of expertise?)
//         result.CURRENT_EXPERIENCE_DROPDOWN_DATA = parser.parseCurrentExperience(JOBS.CURRENT_EXPERIENCE);

//         // fourth screen (What is your most recent job title?)
//         result.CURRENT_JOBS_DROPDOWN_DATA = parser.parseCurrentJobs(JOBS.CURRENT_JOBS);

//         // fifth screen (What is your most recent annual income?)
//         result.ANNUAL_INCOME_DROPDOWN_DATA = parser.parseAnnualIncome(matching.RECENT_ANNUAL_INCOMES);

//         // sixth screen (Candidate's preferred Company Size)
//         result.COMPANY_SIZE_DROPDOWN_DATA = parser.parseCompanySize(matching.PREFERRED_COMPANY_SIZES);

//         // sixth screen (How many years of industry experience do you have?)
//         result.EXPERIENCE_DROPDOWN_DATA = parser.parseExperience(matching.EXPERIENCES);

//         result.EMPLOYEES_AMOUNTS_DROPDOWN_DATA = parser.parseEmployeeAmount(matching.EMPLOYEES_AMOUNTS);
//         result.EMPLOYEMENTS_DROPDOWN_DATA = parser.parseEmployments(matching.EMPLOYMENTS);
//         result.DEGREES_DROPDOWN_DATA = parser.parseDegrees(matching.DEGREES);

//         callback(null, result);
//     };
// };

// var enumService = new EnumService();

// module.exports = enumService;
