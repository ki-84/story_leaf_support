// Story Leaf support site configuration.
//
// After creating the Google Forms, fill in the IDs below.
// How to find them: create the form, use "Get pre-filled link", fill dummy
// values, copy the generated URL. It looks like:
//   https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.123456=dummy
// FORM_ID is the long token after /d/e/, and each entry.NNNNN is a field id.
window.STORYLEAF_CONFIG = {
  bugForm: {
    formId: "1FAIpQLScVOmrAYcPK1bubkfPnJQXCduVr7JS7EfN-ZqOAwZRomJ01zQ",
    versionEntry: "1394453723",  // "App version"
    osEntry: "280586603",        // "iOS version"
    deviceEntry: "658019721",    // "Device model"
  },
  featureForm: {
    formId: "",          // Google Form id for feature requests
    versionEntry: "",    // entry id of the "App version" field (optional)
  },
  // Shown while the forms above are not configured yet.
  // (must be a PUBLIC repository — private repos return 404 to visitors)
  fallbackIssuesUrl: "https://github.com/ki-84/story_leaf_support/issues",
};
