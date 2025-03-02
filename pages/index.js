// pages/index.js

import { fetchCameras } from '../lib/contentfulClient';
import './styles.css'; 

export default function Home({ cameras }) {
  return (
    <div>
      <h1 className="header">CAMERA SHOP</h1>
      <div className="camera-container">
        {cameras.map((camera) => (
          <div key={camera.sys.id} className="camera-card">
            <img src={camera.fields.image.fields.file.url} alt={camera.fields.name} className="camera-image" />
            <h2>{camera.fields.model}</h2>
            <p>{camera.fields.brand}</p>
            <p>Price: ${camera.fields.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const cameras = await fetchCameras();
  return {
    props: {
      cameras,
    },
  };
}

