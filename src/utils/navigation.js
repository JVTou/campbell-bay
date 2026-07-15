/**
 * Custom navigation helper for client-side routing.
 * Updates the browser's history and dispatches a 'pushstate' event
 * so the main app listener can update the active route.
 * 
 * @param {string} to - The target path, e.g. '/' or '/commercial' or '/#aboutus'
 */
export const navigate = (to) => {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("pushstate"));
};
