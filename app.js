// Initialize Lucide icons
lucide.createIcons();

// Copy to clipboard functionality
function copyPrompt(buttonElement, textToCopy) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Show toast
    showToast('Prompt copied to clipboard!');
    
    // Change button state temporarily
    const originalContent = buttonElement.innerHTML;
    buttonElement.innerHTML = '<i data-lucide="check"></i> Copied!';
    lucide.createIcons();
    buttonElement.classList.add('copied');
    
    setTimeout(() => {
      buttonElement.innerHTML = originalContent;
      lucide.createIcons();
      buttonElement.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showToast('Failed to copy prompt.');
  });
}

// Toast notification system
function showToast(message) {
  // Remove existing toast if there is one
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Extract prompt text from a prompt-detail section
function extractPromptText(container) {
  let promptText = '';
  const parts = container.querySelectorAll('.prompt-part');
  
  parts.forEach(part => {
    const title = part.querySelector('h4').innerText;
    promptText += `[${title}]\n`;
    
    const paragraphs = part.querySelectorAll('p');
    paragraphs.forEach(p => {
      promptText += p.innerText + '\n';
    });
    
    const lists = part.querySelectorAll('ul');
    lists.forEach(ul => {
      const items = ul.querySelectorAll('li');
      items.forEach(li => {
        promptText += '- ' + li.innerText + '\n';
      });
    });
    
    promptText += '\n';
  });
  
  return promptText.trim();
}

// Attach event listeners to all copy buttons
document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      const promptDetail = card.querySelector('.prompt-detail');
      
      if (promptDetail) {
        const text = extractPromptText(promptDetail);
        copyPrompt(btn, text);
      }
    });
  });
});
