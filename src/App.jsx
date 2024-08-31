import Card from "./components/card";
import Box from "./assets/images/Vector.svg"

export default function App() {
  return (
    <div className="parent-div">
      <Card
        title="Highlight benefit one"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        src={Box}
        alt="Relume Logo"
      />
      <Card
        title="Highlight benefit two"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        src={Box}
        alt="Relume Logo"
      />
    </div>
  );
}