export const imageLoader = ({ src, width }) => {
  if (src.startsWith("/uploads")) {
    return `https://radiant-backend.onrender.com${src}?w=${width || 1000}`;
  } else if (src.startsWith("https://res.cloudinary.com")) {
    return `${src}?w=${width || 1000}`;
  } else {
    return src;
  }
};
