
document.querySelectorAll('.phase').forEach(phase => {
    phase.addEventListener('mouseover', () => {
      const phaseDetails = phase.querySelector('.nested-phases').innerHTML;
      document.getElementById('details').innerHTML = phaseDetails;
    });
  });
  