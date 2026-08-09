// Story Leaf support site configuration.
//
// After creating the Google Forms, fill in the IDs below.
// How to find them: create the form, use "Get pre-filled link", fill dummy
// values, copy the generated URL. It looks like:
//   https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.123456=dummy
// FORM_ID is the long token after /d/e/, and each entry.NNNNN is a field id.
window.STORYLEAF_CONFIG = {
  bugForm: {
    formId: "",          // Google Form id for bug reports
    versionEntry: "",    // entry id of the "App version" short-answer field
    osEntry: "",         // entry id of the "iOS version" field (optional)
    deviceEntry: "",     // entry id of the "Device model" field (optional)
  },
  featureForm: {
    formId: "",          // Google Form id for feature requests
    versionEntry: "",    // entry id of the "App version" field (optional)
  },
  // Shown while the forms above are not configured yet.
  fallbackIssuesUrl: "https://github.com/ki-84/story_leaf/issues",
};
