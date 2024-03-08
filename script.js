document.getElementById('noteForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const noteText = document.getElementById('noteInput').value;
  
    if (noteText.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = noteText;

      document.getElementById('noteList').appendChild(listItem);
  
      document.getElementById('noteInput').value = '';
    }
  });