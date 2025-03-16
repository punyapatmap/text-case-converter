function formatText() {
    let text = document.getElementById("inputText").value;
  
    let lines = text.split(/\r?\n/);
  
    let titleCasedLines = lines.map(line => {
      let words = line.trim().toLowerCase().split(' ');
      return words.map(word => {
        if (word.length === 0) return "";
        return word[0].toUpperCase() + word.slice(1);
      }).join(' ');
    });
  
    let result = titleCasedLines.join("\n");
  
    if (document.getElementById("removeDoubleSpaces").checked) {
      result = result.replace(/\s{2,}/g, " ");
    }
  
    if (document.getElementById("combineLines").checked) {
      result = result.replace(/[\r\n]+/g, " ");
    }
  
    document.getElementById("resultText").value = result.trim();
  }