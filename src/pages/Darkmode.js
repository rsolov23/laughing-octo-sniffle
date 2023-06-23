import React, { useState, useEffect } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import "animate.css";
import "../App.css";

// The useState hook is used to create a state variable theme with an initial value of "light".
// The toggleTheme function toggles the theme between "light" and "dark" based on the current value of the theme state.
// The useEffect hook is used to update the body class whenever the theme state changes. This ensures that the appropriate CSS styles are applied to the body based on the selected theme.
// The content is wrapped in a Flex component to center it vertically and horizontally on the page. The className prop is used to apply the App class from the App.css file along with the current theme value, allowing different styles to be applied based on the theme.
// The <Button> component is used to toggle the theme when clicked. The onClick prop is set to the toggleTheme function, and the mb prop adds a margin-bottom of 4 units to the button.
// The <h1> element displays the "Hello, world!" text, which is centered within the Flex component.

function DarkMode() {
  // State variable for theme
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Update the body class based on the theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection="column"
      className={`${theme}`}
    >
      {/* Button to toggle the theme */}
      <Button
        onClick={toggleTheme}
        mb={4}
        size="lg"
        height="75px"
        width="100px"
        border="2px"
        borderColor="green.500"
      >
        {theme === "light" ? (
          <Icon icon="carbon:sun" className="icon animate__swing" />
        ) : (
          <Icon icon="carbon:moon" className="icon animate__swing" />
        )}
      </Button>

      {/* Heading */}
      <Text fontSize="5xl" className="animate__jello">
        Hello, world!
      </Text>
    </Flex>
  );
}

export default DarkMode;
