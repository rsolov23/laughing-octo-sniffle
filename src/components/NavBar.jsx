import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
// The NavBar component represents a navigation bar
const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); // State variable to track if the menu is open or closed

  const toggle = () => setIsOpen(!isOpen); // Function to toggle the menu

  return (
    <NavBarContainer {...props}>
      <Link
        href="/"
        fontSize="4xl"
        fontWeight="bold"
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      >
        <Icon icon="skill-icons:react-dark" />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />{" "}
      {/* Render the menu toggle button */}
      <MenuLinks isOpen={isOpen} /> {/* Render the menu links */}
    </NavBarContainer>
  );
};

// The CloseIcon component renders an SVG icon for the close symbol
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

// The MenuIcon component renders an SVG icon for the menu symbol
const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

// The MenuToggle component renders the menu toggle button
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

// The MenuItem component represents a single menu item/link
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text
        textShadow="0px 0px 1.5px black"
        fontSize="3xl"
        display="block"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

// The MenuLinks component renders the menu items/links
const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/toggle">Toggle </MenuItem>
        <MenuItem to="/darkmode">DarkMode </MenuItem>
        <MenuItem to="/example">Props </MenuItem>
        <MenuItem to="/fetch">Fetch </MenuItem>
        <MenuItem to="/lifecycle">Lifecycle </MenuItem>
      </Stack>
    </Box>
  );
};

// The NavBarContainer component is a container for the navigation bar
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.500", "primary.500"]}
      layerStyle="outlinedText"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

// The necessary dependencies are imported, including React and specific components from Chakra UI library.

// The NavBar component is declared as a functional component that takes in props.

// Within the NavBar component, the state variable isOpen is declared using the useState hook from React. It represents the state of the menu toggle (whether it is open or closed).

// The toggle function is defined to toggle the value of isOpen when the toggle button is clicked.

// The NavBar component returns the JSX code that represents the navigation bar. It uses the NavBarContainer component, which wraps the logo, toggle button (MenuToggle), and menu links (MenuLinks).

// The CloseIcon component renders an SVG icon for the close symbol.

// The MenuIcon component renders an SVG icon for the menu symbol.

// The MenuToggle component is a box that displays the menu toggle button. It receives the toggle function and isOpen state as props and renders the CloseIcon or MenuIcon based on the value of isOpen.

// The MenuItem component represents a single menu item/link. It receives the children (menu item text), isLast (whether it's the last item in the menu), and to (the URL) as props. It renders a link (Link) with the specified text and URL.

// The MenuLinks component displays the menu items. It receives the isOpen state as a prop. The component conditionally renders a Box container based on the value of isOpen. The Stack component within the Box renders a set of MenuItem components.

// The NavBarContainer component is a container for the entire navigation bar. It receives children and other props. It renders a Flex component with the necessary styling and wraps the children within it.
