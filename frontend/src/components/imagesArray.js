function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const imagesArray = importAll(require.context('../assets/images/official_artwork', false, /\.(png)$/));
  
  export default imagesArray