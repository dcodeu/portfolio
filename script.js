document.addEventListener('DOMContentLoaded', function() {
    // Typing effect (runs once every 30 seconds)
    const typedTextSpan = document.querySelector('.typing');
    const textArray = ["Hi, I'm DJ Wilson"];
    const typingDelay = 200;
    const cycleDelay = 30000; // 30 seconds delay between cycles
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        // After typing, wait for 30 seconds then erase
        setTimeout(erase, cycleDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingDelay);
      } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        // Start typing again after a short delay
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    // Start the typing effect if textArray is not empty
    if (textArray.length) {
      setTimeout(type, cycleDelay);
    }
  
    // Floating effect using IntersectionObserver for elements with class "float"
    const floatElements = document.querySelectorAll('.float');
    const observerOptions = {
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    floatElements.forEach(el => {
      observer.observe(el);
    });
  });
  