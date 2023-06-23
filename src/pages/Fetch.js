import React, { useState, useEffect } from "react";
import { Container, Text, Button, Flex } from "@chakra-ui/react";

function Fetch() {
  const [joke, setJoke] = useState(""); // State variable to store the fetched joke
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    // Fetch joke from API when the component mounts
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json()) // Parse the response to JSON
      .then((data) => {
        setJoke(data.joke); // Set the fetched joke in state
        setIsLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.log("Error fetching joke:", error); // Log any errors that occur during fetching
        setIsLoading(false); // Set loading state to false
      });
  }, []);

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
          Joke Component
        </Text>
        {isLoading ? (
          <Text fontSize="2xl">Loading joke...</Text> // Show loading text while fetching
        ) : (
          <>
            {/* Display the fetched joke */}
            <Text fontSize="3xl">{joke}</Text>
            {/* // Button to fetch another joke Get Another Joke */}
            <Button onClick={() => window.location.reload()}>Next</Button>
          </>
        )}
      </Flex>
    </Container>
  );
}

export default Fetch;
