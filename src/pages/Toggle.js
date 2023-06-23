import React, { useState } from "react";
import {
  Container,
  Text,
  Button,
  Flex,
  List,
  ListItem,
  Image,
  Box,
} from "@chakra-ui/react";
import puppy from "../assets/images/popo.jpg";

function Toggle() {
  // State variables
  const [isVisible, setIsVisible] = useState(false); // Toggle visibility of an image
  const [products] = useState([
    // Array of products
    { id: 1, name: "Monitor", price: 10 },
    { id: 2, name: "Keyboard", price: 15 },
    { id: 3, name: "Mouse", price: 15 },
    { id: 4, name: "Chair", price: 100 },
    { id: 5, name: "Desk", price: 125 },
    { id: 6, name: "Rubber Ducky", price: 5 },
  ]);
  const [cart, setCart] = useState([]); // Array representing the cart

  // Add product to cart
  const addToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  // Toggle visibility of the image
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Container>
        <Flex direction="column" align="center" gap={4}>
          {/* Heading for products */}
          <Text
            textShadow="0px 0px 1.5px black"
            fontSize="3xl"
            display="block"
            variant="h2"
            as="b"
            color={["white", "white", "primary.500", "primary.500"]}
          >
            Products
          </Text>
          {/* List of products */}
          <List direction="column" align="center" gap={4}>
            {products.map((product) => (
              <ListItem key={product.id} m={4}>
                {product.name} - ${product.price}
                <Button onClick={() => addToCart(product.id)}>
                  Add to Cart
                </Button>
              </ListItem>
            ))}
          </List>

          {/* Heading for cart */}
          <Text
            textShadow="0px 0px 1.5px black"
            fontSize="3xl"
            display="block"
            variant="h2"
            as="b"
            color={["white", "white", "primary.500", "primary.500"]}
          >
            Cart
          </Text>
          {/* List of cart items */}
          <List>
            {cart.map((product) => (
              <ListItem key={product.id} m={4} mr={8}>
                {product.name} - ${product.price}
                <Button ml={8} onClick={() => removeFromCart(product.id)}>
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>

          {/* Display total price */}
          <Text>Total Price: ${calculateTotalPrice()}</Text>
        </Flex>
        <Flex direction="column" align="center" gap={4} mt={6}>
          {/* Toggle visibility button */}
          <Button
            onClick={toggleVisibility}
            size="sm"
            rounded="md"
            _hover={{
              bg: ["primary.100", "primary.100", "primary.500", "primary.500"],
            }}
          >
            Click here
          </Button>

          {/* Image */}
          {isVisible && (
            <Flex direction="column" align="center" gap={4}>
              <Text
                align="center"
                fontSize="5xl"
                variant="h2"
                as="b"
                color={["white", "white", "primary.500", "primary.500"]}
              >
                Conditional Rendering
              </Text>
              <Image
                 boxSize='100px'
                 objectFit='cover'
                src={puppy}
                alt="Apollo-boston-terrier"
                className="popo"
              />
            </Flex>
          )}
        </Flex>
      </Container>
    </>
  );
}

export default Toggle;
