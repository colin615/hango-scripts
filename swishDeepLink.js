  document.addEventListener('DOMContentLoaded', function() {
    console.log("SWISH DEEPLINK LOADING")
    const paymentDiv = document.querySelector('.paymethod_description');
    if (paymentDiv) {
      const link = document.createElement('a');
      link.href = 'https://www.youtube.com';
      link.textContent = paymentDiv.textContent;
      paymentDiv.textContent = '';
      paymentDiv.appendChild(link);
    }
  });
