function embedVideo() {
  const youtubeUrl = document.getElementById('youtubeUrl').value;
  const videoId = extractVideoId(youtubeUrl);
  if (videoId) {
    const iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`; // Исправлено: используется шаблонная строка
    iframe.frameborder = "25";
    iframe.allowFullscreen = true; // Убедитесь, что это true
    document.getElementById('videoContainer').innerHTML = ''; 
    document.getElementById('videoContainer').appendChild(iframe);
  } else {
    alert('Неверная ссылка на YouTube.');
  }
}

function extractVideoId(url) {
  const regex = /(?:v=|youtu\.be\/|embed\/)([^?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
