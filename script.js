document.addEventListener('DOMContentLoaded', () => {
    // Reflect Gratitude (Change Text)
    document.getElementById('change-text-btn').addEventListener('click', () => {
      const title = document.getElementById('main-title');
      title.textContent = 'Gratitude is the fairest blossom 🌸';
    });
  
    // Shine with Gratitude (Change Style)
    document.getElementById('change-style-btn').addEventListener('click', () => {
      const desc = document.getElementById('description');
      desc.style.color = '#d45d79';
      desc.style.backgroundColor = '#fff0f5';
      desc.style.padding = '10px';
      desc.style.borderRadius = '8px';
      desc.style.fontStyle = 'italic';
    });
  
    // Add a Gratitude Note
    document.getElementById('add-element-btn').addEventListener('click', () => {
      const note = document.createElement('p');
      note.textContent = '🌼 I’m grateful for the little things today.';
      note.className = 'gratitude-note';
      document.getElementById('dynamic-content').appendChild(note);
    });
  
    // Remove Last Note
    document.getElementById('remove-element-btn').addEventListener('click', () => {
      const container = document.getElementById('dynamic-content');
      if (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    });
  });
  