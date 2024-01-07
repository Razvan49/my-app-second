import PropTypes from "prop-types";

function SearchBar({ isVisible, text, price }) {
  const helpText = text.length > 10 && <p>Textul este mai lung de zece caractere</p>;
  return (
    <div>
      {isVisible ? "Pentru ca este vizibil" : ""}
      {helpText}
      <h1>{text}</h1>Search
      <h2>{price}</h2>
      <h3>Tag</h3>
      <h4>Inca ceva</h4>
    </div>
  );
}

SearchBar.propTypes = {
  isVisible: PropTypes.bool,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SearchBar;
