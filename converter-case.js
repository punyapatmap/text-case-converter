function formatText() {
    let text = document.getElementById("inputText").value;
    const caseOption = document.getElementById("caseOption").value;
  
    let result = "";
  
    // Handle different case options
    if (caseOption === "lower") {
      result = text.toLowerCase();
  
    } else if (caseOption === "upper") {
      result = text.toUpperCase();
  
    } else if (caseOption === "sentence") {
      text = text.toLowerCase().trim();
      if (text.length > 0) {
        result = text[0].toUpperCase() + text.slice(1);
      } else {
        result = "";
      }
  
    } else if (caseOption === "title") {
      let lines = text.split(/\r?\n/);
  
      let titleCasedLines = lines.map(line => {
        let words = line.trim().toLowerCase().split(' ');
        return words.map(word => {
          if (word.length === 0) return "";
          return word[0].toUpperCase() + word.slice(1);
        }).join(' ');
      });
  
      result = titleCasedLines.join("\n");
    }
  
    // Optional: Remove double spaces
    if (document.getElementById("removeDoubleSpaces").checked) {
      result = result.replace(/\s{2,}/g, " ");
    }
  
    // Optional: Combine lines into one line
    if (document.getElementById("combineLines").checked) {
      result = result.replace(/[\r\n]+/g, " ");
    }
  
    document.getElementById("resultText").value = result.trim();
  }
  
  // ✅ Auto trigger on input + option changes
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("inputText").addEventListener("input", formatText);
  
    document.getElementById("removeDoubleSpaces").addEventListener("change", formatText);
    document.getElementById("combineLines").addEventListener("change", formatText);
    document.getElementById("caseOption").addEventListener("change", formatText);
  
    // Initial trigger in case there's default text or options selected
    formatText();
  });  