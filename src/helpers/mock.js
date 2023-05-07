import productJson from './product.json';
import blogJson from './blog.json';
import tournamentsJson from './tournaments.json';

/**

*/
function generateMockProductData(count, tag) {
  const products = productJson;
  const filtered = products.filter((item) => item.tags.includes(tag));
  return filtered.slice(0, count);
}

function generateMockTournamentsData(count) {
  return tournamentsJson.slice(0, count);
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export {
  generateMockProductData,
  generateMockTournamentsData,
  generateMockBlogData,
};
