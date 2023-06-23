import React from "react";
import { Flex, Link, Box, Image, chakra } from "@chakra-ui/react";
import { cards } from "../assets/data/data";
import Links from "../components/Links";
import ScrollToBottomArrow from "../components/Scroll";

function Header() {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={8} // Top and bottom padding
      >
        <chakra.h1
          className="title"
          fontSize="6xl"
          fontWeight="bold"
          mb={4} // Margin bottom
        >
          Topics we will cover
        </chakra.h1>

        <Box p={100}>
          <Flex justifyContent="space-between" mt={-10} flexWrap="wrap">
            {cards.map((card) => (
              <Box
                key={card.id}
                w={{ base: "full", md: "48%", lg: "32%" }}
                p={4}
                my={4} // Margin between cards
                mb={125} // Margin between rows
                bg="white"
                shadow="lg"
                rounded="lg"
              >
                <Flex
                  justifyContent={{
                    base: "center",
                    md: "end",
                  }}
                  mt={-16}
                >
                  <Image
                    w={20}
                    h={20}
                    fit="cover"
                    rounded="full"
                    borderStyle="solid"
                    borderWidth={2}
                    color="brand.500"
                    _dark={{
                      color: "brand.400",
                    }}
                    alt="Testimonial avatar"
                    src={card.image}
                  />
                </Flex>

                <Link
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontSize={{
                    base: "2xl",
                    md: "3xl",
                  }}
                  mt={{
                    base: 2,
                    md: 0,
                  }}
                  fontWeight="bold"
                  href={card.link}
                  target="blank"
                >
                  {card.title}
                </Link>

                <chakra.p
                  mt={2}
                  color="gray.600"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  {card.description}
                </chakra.p>

                <Flex justifyContent="end" mt={4}>
                  <Link
                    fontSize="xl"
                    color="brand.500"
                    _dark={{
                      color: "brand.300",
                    }}
                  >
                    {card.name}
                  </Link>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      <ScrollToBottomArrow />
      <Links />
    </>
  );
}

export default Header;
