// lib/contentfulClient.js

import { createClient } from 'contentful';

const client = createClient({
  space: 'z32lt2tl6y97',
  accessToken: '4oRWQ7IjG-xNzWczEMadgljoycLl_Cj2BU_YyR8RLQI',
});

export async function fetchCameras() {
  const response = await client.getEntries({
    content_type: 'cameras', // Ensure that this matches your content type ID in Contentful
  });
  return response.items;
}