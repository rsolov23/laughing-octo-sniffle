import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToBottomArrow = () => {
  const [showArrow, setShowArrow] = useState(false); // State variable to track whether to show the arrow or not

  const handleScroll = () => {
    // Function to handle scroll event
    const windowHeight = window.innerHeight; // Height of the window
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Scroll position from the top of the page
    const scrollHeight = document.documentElement.scrollHeight; // Total scroll height of the page
    const scrolledToBottom = scrollTop + windowHeight >= scrollHeight; // Check if scrolled to the bottom

    setShowArrow(!scrolledToBottom); // Update showArrow state based on whether scrolled to the bottom or not
  };

  const scrollToBottom = () => {
    // Function to scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the top of the document's content
      behavior: "smooth", // Apply smooth scrolling behavior
    });
  };

  // Attach event listener on mount and clean up on unmount
  useEffect(() => {
    // Effect hook to add and remove the scroll event listener
    window.addEventListener("scroll", handleScroll); // Add scroll event listener and call handleScroll function
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on component unmount
    };
  }, []);

  return (
    <div
      className={`scroll-to-bottom-arrow ${showArrow ? "show" : ""}`} // Set class name to show or hide the arrow based on the showArrow state
      onClick={scrollToBottom} // Scroll to the bottom when the arrow is clicked
    >
      <Icon icon="line-md:arrow-down" /> {/* Render the arrow icon */}
    </div>
  );
};

export default ScrollToBottomArrow;
