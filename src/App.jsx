import "./App.css";
import SearchBar from "./SearchBar";
import Books from "./Books";
import Menu from "./Menu";
import TutorsList from "./TutorsList";
import Button from "./Buttons";

function App() {
  const menuItems = [
    {
      id: 1,
      name: "Acasa",
    },
    {
      id: 2,
      name: "Despre noi",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];

  const data = {
    name: "MIT",
    description:
      "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    tutors: [
      {
        firstName: "John",
        lastName: "Smith",
        phone: "+1 302-865-7394",
        email: "johnsmith@goit.global",
        city: "New York",
        options: "Group creation",
      },
      {
        firstName: "Antonio",
        lastName: "García",
        phone: "+34 456 890 302",
        email: "antonio.garcia@goit.global",
        city: "Madrid",
        options: "Group creation, editing teacher profiles",
      },
    ],
    cities: ["Kyiv", "London", "Berlin"],
    department: [
      { name: "Faculty of Computer Science" },
      { name: "Faculty of Automation" },
      { name: "Faculty of Neural Networks" },
    ],
  };

  const isVisible = true;
  const imageUrl =
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  const productPrice = 10.99;

  const product = (
    <>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>Tacos With Lime</h2>
      <p>Price: {productPrice}$</p>
      <button type="button">Add to cart</button>
    </>
  );

  return (
    <div>
      <Menu items={menuItems} />
      <Button text="Button" icon="&" handleClick={() => console.log("Scrie asta")} />
      <SearchBar text="Schimb textul" isVisible={isVisible} price={23}>
        <h3>Tag</h3>
        <h4>Inca ceva</h4>
      </SearchBar>
      <TutorsList tutors={data.tutors} />
      <Books />
      <h1>Aplicatia mea react</h1>
      {product}
    </div>
  );
}

export default App;
