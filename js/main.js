// Calculates the width of the user's scrollbar to modify the 100vw value in CSS for Windows users that have an always present in scroll bar.

const getScrollbarSize = () => {
    // Create a temporary div container and append it into the body
    const container = document.createElement('div')
    // Append the container in the body
    document.body.appendChild(container)
    // Force scrollbar on the container
    container.style.overflow = 'scroll'
  
    // Add ad fake div inside the container
    const inner = document.createElement('div')
    container.appendChild(inner)
  
    // Calculate the width based on the container width minus its child width
    const width = container.offsetWidth - inner.offsetWidth
    const height = container.offsetHeight - inner.offsetHeight
    // Remove the container from the body
    document.body.removeChild(container)
  
    return { width, height }
  }
  
  const setScrollbarSize = () => {
    // Get the scrollbar dimension
    const scrollbar = getScrollbarSize()
    // Set a custom property with the value we calculated
    document.documentElement.style.setProperty('--scrollbarX', `${scrollbar.width}px`)
    document.documentElement.style.setProperty('--scrollbarY', `${scrollbar.height}px`)
  }
  
  setScrollbarSize()

// BUTTON INTERACTIONS  
const buttonRegion = document.getElementById("button-region");
const chartRegion = document.getElementById("observable-chart-region");


const buttonReligion = document.getElementById("button-religion");
const chartReligion = document.getElementById("observable-chart-religion");

buttonRegion.addEventListener("click", toggleCharts); 
buttonReligion.addEventListener("click", toggleCharts); 


function toggleCharts(){
  chartRegion.classList.toggle('hide');
  chartReligion.classList.toggle('hide');
  buttonRegion.classList.toggle('selected')
  buttonReligion.classList.toggle('selected')

}
// CREATES SMOOTH SCROLL FOR ANCHOR JUMPS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


