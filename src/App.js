import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning> See Deal</Button>
      </div>
      <div>
        <Button secondary outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
