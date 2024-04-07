export const imageLoader = ({ src, width }) => {
  return `http://localhost:1337${src}?w=${width || 1000}`;
};
