document.querySelector('.intro').addEventListener('mousemove', function (event) {
    const element = event.currentTarget;
    const boundingRect = element.getBoundingClientRect();
    
    // Calculate the mouse position relative to the element
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;

    // Update the text-stroke based on the mouse position
    const strokeWidth = Math.min(1 + x / 50, 5); // Adjust as needed
    element.style.setProperty('--stroke-width', strokeWidth + 'px');
  }); 