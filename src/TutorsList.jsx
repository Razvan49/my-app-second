import PropTypes from "prop-types";

const TutorsList = ({ tutors }) => {
  // AVEM 2 METODE     CU O FUNCTIE SAU DIRECT
  //   function renderList(items) {
  //     return items.map((item) => (
  //       <li key={item.phone}>
  //         {`${item.lastName}
  //         ${item.firstName}`}
  //       </li>
  //     ));
  //   }

  //   return <ul>{renderList(tutors)}</ul>;
  // };

  return (
    <ul>
      {tutors.map((item) => (
        <li key={item.phone}>{`${item.firstName} ${item.lastName}`}</li>
      ))}
    </ul>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array,
};

export default TutorsList;
