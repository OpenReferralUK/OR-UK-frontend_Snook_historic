import ImageCard from "../images/";

const CardList = ({ id, itemList, styles }) => {
  let i = 1000;
  const addPadding = () => {
    if (itemList.length && itemList.length % 4 !== 0) {
      //pad out images for even distribution
      const paddingItem = {
        flexible: "",
        id: i,
      };
      i = i + 1;
      itemList.push(paddingItem);
    }
  };

  const BuildList = ({ list }) => {
    addPadding();
    const logosHolder = list
      .filter((item) => !!item.CompanyLogo)
      .map((item) => {
        if (item.CompanyLogo) {
          return (
            <li key={item.id ? `${item.id}_itemcard` : ""} className="img">
              <a
                href={item.link}
                className="link-with-image"
                aria-label={item.CompanyLogo.caption}
              >
                <ImageCard id={id} logo={item} styleName="" />
              </a>
            </li>
          );
        } else {
          return <li key={i++} className="img"></li>;
        }
      });

    return <ul className="home-card-content">{logosHolder}</ul>;
  };

  if (!itemList || !itemList.length) return null;

  return <BuildList list={itemList} />;
};
export default CardList;
