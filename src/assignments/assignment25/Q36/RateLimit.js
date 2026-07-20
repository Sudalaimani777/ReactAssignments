const fetchWithBackoff = async (url, retries = 3, delay = 1000) => {
  const response = await fetch(url);
  
  if (response.status === 429 && retries > 0) {
    const retryAfter = response.headers.get('Retry-After');
    const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : delay;
    
    await new Promise(resolve => setTimeout(resolve, waitTime));
    return fetchWithBackoff(url, retries - 1, delay * 2); 
  }
  
  if (!response.ok) throw new Error('Request failed');
  return response.json();
};