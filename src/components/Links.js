import React from "react";
import { Box, chakra, Icon, Text, List, ListItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Links() {
  return (
    <>
      {/* Container */}
      <Box px={8} py={24} mx="auto">
        {/* Inner box */}
        <Box
          w={{
            base: "full",
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          textAlign={{
            base: "left",
            md: "center",
          }}
        >
          {/* Heading */}
          <chakra.h1
            mb={6}
            fontSize={{
              base: "4xl",
              md: "6xl",
            }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{
              base: "normal",
              md: "tight",
            }}
            color="gray.900"
            _dark={{
              color: "gray.100",
            }}
          >
            <Text
              display={{
                base: "block",
                lg: "inline",
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)" // Linear gradient from green.400 to purple.500
              fontWeight="extrabold"
            >
              Useful Links
            </Text>{" "}
          </chakra.h1>

          {/* List of links */}
          <List spacing={3}>
            {/* Link item */}
            <ListItem>
              <Icon as={StarIcon} color="green.500" /> {/* Star icon */}
              <Link to="https://react.dev/" target="_blank">
                {" "}
                {/* Link to react.dev */}
                react.dev
              </Link>
            </ListItem>
            {/* Repeat the pattern for other links */}
            <ListItem>
              <Icon as={StarIcon} color="green.500" />
              <Link
                to="https://www.lambdatest.com/blog/best-css-frameworks-for-react/"
                target="_blank"
              >
                CSS frameworks for React
              </Link>
            </ListItem>
            <ListItem>
              <Icon as={StarIcon} color="green.500" />
              <Link to="https://iconify.design/" target="_blank">
                Iconify
              </Link>
            </ListItem>
            <ListItem>
              <Icon as={StarIcon} color="green.500" />
              <Link to="https://scrimba.com/learn/learnreact" target="_blank">
                Scrimba
              </Link>
            </ListItem>
            <ListItem>
              <Icon as={StarIcon} color="green.500" />
              <Link
                to="https://kinsta.com/blog/react-components-library/"
                target="_blank"
              >
                Component Libraries
              </Link>
            </ListItem>
            <ListItem>
              <Icon as={StarIcon} target="_blank" color="green.500" />
              <Link
                to="https://medium.com/javarevisited/top-10-free-courses-to-learn-react-js-c14edbd3b35f"
                target="_blank"
              >
                Free React Courses
              </Link>
            </ListItem>
            <ListItem>
              <Icon as={StarIcon} color="green.500" />
              <Link
                to="https://www.youtube.com/@TraversyMedia/search?query=react"
                target="_blank"
              >
                Traversy Media
              </Link>
            </ListItem>

            {/* You can also use custom icons from react-icons */}
          </List>
        </Box>
      </Box>
      ;
    </>
  );
}

export default Links;
