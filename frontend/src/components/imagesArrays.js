
const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
};
  
const standardImages = importAll(require.context('../images/standard', false, /\.(png)$/));

export default standardImages