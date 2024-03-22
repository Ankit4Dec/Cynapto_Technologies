// Get the scale input and scale value elements
const scaleInput = document.getElementById("scale");
const scaleValue = document.getElementById("scaleValue");
const scaleInput2 = document.getElementById("scale2");
const scaleValue2 = document.getElementById("scaleValue2");

// Update the scale value text box when the scale input changes
scaleInput.addEventListener("input", function () {
  // Ensure the scale value is within the range of 1 to 100
  let scale = parseFloat(this.value);
  if (scale < 1) {
    scale = 1;
  } else if (scale > 100) {
    scale = 100;
  }

  // Update the scale value
  scaleValue.value = scale.toFixed(1);
});
// Update the scale value text box when the scale input changes
scaleInput2.addEventListener("input", function () {
  // Ensure the scale value is within the range of 1 to 100
  let scale2 = parseFloat(this.value);
  if (scale2 < 1) {
    scale2 = 1;
  } else if (scale2 > 100) {
    scale2 = 100;
  }

  // Update the scale value
  scaleValue2.value = scale2.toFixed(1);
});

const videoGrid = document.querySelector('.video-grid');
const addVideoInput = document.getElementById('add-video');

// Function to handle adding video files
addVideoInput.addEventListener('change', (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    Array.from(files).forEach(file => {
      const videoPreview = document.createElement('div');
      videoPreview.classList.add('video-preview');
      videoPreview.textContent = file.name;
      videoGrid.appendChild(videoPreview);

      // Load video template in video frame
      const videoFrame = document.querySelector('.video-frame');
      const videoTemplate = document.createElement('img'); // Use <img> tag for video template
      videoTemplate.src = 'path_to_your_video_template'; // Set the source of the video template
      videoTemplate.alt = 'Video Template';
      videoFrame.innerHTML = ''; // Clear previous content
      videoFrame.appendChild(videoTemplate);
    });
  }
});

// Function to handle viewing video assets
document.querySelector('.control-button:nth-of-type(2)').addEventListener('click', () => {
  // Implement your logic to view video assets here
});

// Function to handle sorting video assets
document.querySelector('.sort-options').addEventListener('click', (event) => {
  const sortOption = event.target.dataset.sort;
  if (sortOption) {
    // Implement your logic to sort video assets based on the selected option
    console.log('Sorting by:', sortOption);
  }
});
