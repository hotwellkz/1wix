// This script will be injected into the target page
export const autoSubmitScript = `
  (function() {
    // Get the stored text
    const designText = localStorage.getItem('designText');
    
    if (designText) {
      const checkElements = () => {
        // Find the textarea and both buttons
        const textarea = document.querySelector('textarea');
        const purpleButton = document.querySelector('button.bg-purple-500, button[style*="background-color: rgb(168, 85, 247)]"');
        
        if (textarea && purpleButton) {
          // Set the text value
          textarea.value = designText;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          
          // Clear the stored text
          localStorage.removeItem('designText');
          
          // Small delay to ensure the UI updates
          setTimeout(() => {
            purpleButton.click();
          }, 100);
        } else {
          // If elements aren't found, retry after a short delay
          setTimeout(checkElements, 100);
        }
      }
      
      // Start checking for elements
      checkElements();
    }
  })();
`;
