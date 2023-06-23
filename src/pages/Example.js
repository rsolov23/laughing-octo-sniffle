import React from "react";
import {
  Container,
  Text,
  Flex,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { mockData } from "../assets/data/data";
// It defines a functional component called Example that takes in props as its parameter.
// Within the Example component, it deconstructs the props object to extract title, data, handleClick, and isHighlighted.
// If the data is empty or undefined, it renders a simple message saying "No data available."
// Otherwise, it renders a <div> element containing the title, a <ul> element, and a <button>.
// Within the <ul> element, it maps over the data array and renders an <li> element for each item, using the item.id as the key and item.name as the content.
// The style of each <li> element is set based on the value of isHighlighted. If it's true, the background color is set to yellow; otherwise, it's transparent.
// Finally, a <button> is rendered, and when clicked, it executes the handleClick function (currently set to log a message to the console).
// Within the Sample component, it renders a <div> element containing an <h1> and two instances of the Example component.
// The first instance represents "Featured Products" and receives a subset of mockData (the first 3 items) as the data prop. It also sets isHighlighted to true.
// The second instance represents "New Arrivals" and receives the remaining items of mockData as the data prop. It sets isHighlighted to false.

// Example component
function Example(props) {
  const { title, data, handleClick, isHighlighted } = props;

  // Render a message if data is empty or undefined
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  // Render the title, list of items, and a button
  return (
    <Container>
      <Flex direction="column" align="center" gap={4}>
        {/* Heading for products */}
        <Text
          textShadow="0px 0px 1.5px black"
          WebkitTextStroke="1px black"
          fontSize="3xl"
          display="block"
          variant="h2"
          as="b"
          color={["white", "white", "primary.500", "primary.500"]}
        >
          {title}
        </Text>
        <List direction="column" align="center" gap={4}>
          {/* Map over the data array and render an item for each */}
          {data.map((item) => (
            <ListItem
              fontSize="3xl"
              key={item.id}
              //the style prop is used to apply inline styles to the component. The backgroundColor property is set based on the value of the isHighlighted prop.
              // If isHighlighted is true, the background color will be set to "yellow".
              // If isHighlighted is false
              style={{
                backgroundColor: isHighlighted ? "yellow" : "transparent",
              }}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
        <Button onClick={handleClick}>Click Me</Button>
      </Flex>
    </Container>
  );
}

// Sample component
function Sample() {
  return (
    <Container>
      <Flex direction="column" align="center" gap={4}>
        <Text
          textShadow="0px 0px 1.5px black"
          WebkitTextStroke="1px black"
          fontSize="3xl"
          display="block"
          variant="h2"
          as="b"
          color={["white", "white", "primary.500", "primary.500"]}
        >
          Mock Data Example
        </Text>
        <Example
          title="Featured Products"
          data={mockData.slice(0, 3)}
          handleClick={() => console.log("Button clicked")}
          isHighlighted={true}
        />

        <Example
          title="New Arrivals" // Title for the component
          data={mockData.slice(3)} // Data passed to the component (a subset of the mockData array starting from index 3)
          handleClick={() => console.log("Button clicked")} // Function to handle the button click event (console.log is used here)
          isHighlighted={false} // Flag indicating whether the component should be highlighted or not (set to false)
        />
      </Flex>
    </Container>
  );
}

export default Sample;

// The slice() method is being used to extract a subset of elements from the mockData array.

// In the Sample component, the mockData array is being sliced into two parts:

// The first Example component uses mockData.slice(0, 3), which means it extracts elements from index 0 (inclusive) to index 3 (exclusive). This will create a new array containing the first three elements of mockData.

// The second Example component uses mockData.slice(3), which means it extracts elements from index 3 (inclusive) to the end of the array. This will create a new array containing the remaining elements starting from index 3 to the end of mockData.

// By using the slice() method, the original mockData array remains unmodified, and two separate subsets of the data are passed as data props to the respective Example components.
