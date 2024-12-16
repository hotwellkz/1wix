// This script will be injected into the target page
export const autoSubmitScript = `
  (function() {
    // Get the stored text
    const designText = localStorage.getItem('designText');
    
    if (designText) {
      // Find the textarea with placeholder "How can Bolt help you today?"
      const textarea = document.querySelector('textarea[placeholder="How can Bolt help you today?"]');
      const submitButton = document.querySelector('button[type="submit"]');
      
      if (textarea && submitButton) {
        // Set the text value
        textarea.value = designText;
        
        // Clear the stored text
        localStorage.removeItem('designText');
        
        // Submit the form
        submitButton.click();
      }
    }
  })();
`;