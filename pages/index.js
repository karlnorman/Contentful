// pages/index.js
import client from '../lib/contentfulClient';

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'yourContentType' });

  return {
    props: {
      items: res.items,
    },
  };
}

const HomePage = ({ items }) => {
  return (
    <div>
      <h1>Your Content</h1>
      <ul>
        {items.map((item) => (
          <li key={item.sys.id}>{item.fields.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;