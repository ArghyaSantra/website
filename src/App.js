import "./App.css";
import ProductCard from "./components/molecules/productCard/ProductCard";
import Section from "./components/organisms/section";
import AboutUs from "./components/atoms/aboutUs";
import QRCode from "./components/atoms/qrCode";
import HeaderAndContacts from "./components/organisms/headerAndContacts";

function App() {
  return (
    <div className="App">
      <HeaderAndContacts />
      <div className="appSections">
        <Section sectionHeading="Scan QR Card to visit the website on your mobile device">
          <QRCode />
        </Section>
        <Section sectionHeading="About Us">
          <AboutUs />
        </Section>
        <Section sectionHeading="Products And Services">
          <ProductCard heading="Plastic Containers" />
          <ProductCard heading="Wooden Cutlery" />
          <ProductCard heading="Paper Bags" />
          <ProductCard heading="Glass Items" />
          <ProductCard heading="Aluminium Items" />
          <ProductCard heading="Delivery Paper Boxes" />
        </Section>
        <Section sectionHeading="Gallery"></Section>
        <Section sectionHeading="Payment">
          <AboutUs />
        </Section>
      </div>
    </div>
  );
}

export default App;

/*display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;*/
