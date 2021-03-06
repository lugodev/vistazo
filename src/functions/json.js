const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  return fetch(url)
    .then( response => response.json() )
    .then( data => ({
      statusCode: 200,
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    }))
    .catch(error => ({ 
    	statusCode: 422, 
    	body: String(error) 
    }));
}