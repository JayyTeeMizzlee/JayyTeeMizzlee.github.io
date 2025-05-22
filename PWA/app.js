async function loadTopic() {
    const topicId = document.getElementById("topicSelect").value;
    const response = await fetch("data.json");
    const data = await response.json();
    const topic = data.find(t => t.title.toLowerCase() === topicId);
  
    document.getElementById("topicTitle").textContent = topic.title;
    document.getElementById("topicText").textContent = topic.text;
    document.getElementById("topicImage").src = topic.image;
    document.getElementById("topicAudio").src = topic.audio;
    
    drawCanvas(topic.title);
  }
  
  function drawCanvas(label) {
    const canvas = document.getElementById("spaceCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(`Exploring: ${label}`, 20, 50);
  }
  