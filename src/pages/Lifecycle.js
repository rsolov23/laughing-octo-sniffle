import React, { Component } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps called");
    // This method is invoked every time the component receives new props.
    // It should return an object to update the state based on the props or null to indicate no change.
    // Note: This method has limited use cases. Prefer using componentDidUpdate for most cases.
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called");
    // This method is called once the component is mounted and added to the DOM.
    // It's commonly used to perform side effects like data fetching or subscribing to events.
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    // This method is called before a re-render and allows you to control whether the component should update.
    // It should return a boolean value indicating whether to proceed with the update or not.
    // By default, it returns true, but you can optimize performance by implementing custom logic to compare props and state.
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    // This method is called right before the changes from the virtual DOM are reflected in the actual DOM.
    // It allows you to capture some information (e.g., scroll position) before it's potentially changed by the update.
    // The value returned by this method is passed as the third parameter to componentDidUpdate.
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    // This method is called immediately after the component updates and re-renders.
    // It's commonly used to perform additional side effects or update the DOM in response to prop or state changes.
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    // This method is called right before the component is unmounted and destroyed.
    // It's an opportunity to clean up any resources or subscriptions created in componentDidMount or componentDidUpdate.
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch called");
    // This method is called when an error is thrown during rendering, in a lifecycle method, or in the constructor of any child component.
    // It's used to handle and log errors within the component tree. You can display fallback UI or send error reports to a service.
  }

  handleClick = () => {
    this.setState({ message: "Button clicked" });
  };

  render() {
    console.log("Render called");
    // This method is responsible for rendering the component's JSX or null if no rendering is required.
    // Avoid making any changes to component state or interacting with the DOM directly in this method.
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh"
        flexDirection="column"
      >
        <Text
          textShadow="0px 0px 1.5px black"
          fontSize="3xl"
          display="block"
          variant="h2"
          as="b"
          color={["white", "white", "primary.500", "primary.500"]}
          mb={10}
        >
          Lifecycle Methods
        </Text>
        <Button onClick={this.handleClick}>Click Me</Button>
        <p>{this.state.message}</p>
      </Flex>
    );
  }
}

export default Lifecycle;

// componentWillMount() (deprecated): This method was part of the older versions of React's lifecycle and has been deprecated in favor of constructor or componentDidMount. It was invoked just before the component was mounted and rendered into the DOM. However, it had some limitations and caused confusion due to its naming. It's recommended to use constructor for initializing state or setting up instance variables, and componentDidMount for performing any side effects or fetching data.
// componentDidUpdate(prevProps, prevState, snapshot): This method is invoked immediately after the component has been updated and re-rendered. It receives three parameters:
// prevProps: An object representing the component's previous props.
// prevState: An object representing the component's previous state.
// snapshot: This parameter is only present if the component has a getSnapshotBeforeUpdate method. It holds the value returned by getSnapshotBeforeUpdate.
// The componentDidUpdate method is commonly used to perform side effects or additional operations based on the updated props or state. It allows you to compare the current props and state with their previous values and trigger actions accordingly. However, it's crucial to include a condition to prevent infinite loops because updating the state within this method will trigger another render and subsequent componentDidUpdate call.
// componentWillUnmount(): This method is invoked immediately before a component is unmounted and destroyed. It's an opportunity to perform any necessary cleanup or resource releasing operations, such as canceling network requests, removing event listeners, or clearing timers or intervals. It does not receive any parameters.
// componentWillUnmount is typically used to clean up resources that were set up during the component's lifecycle. Failing to properly clean up resources can lead to memory leaks or unexpected behavior. This method is not called when a component is re-rendered or updated, but only when it is about to be removed from the DOM.
// Please note that componentWillMount has been deprecated, and it's recommended to use constructor or componentDidMount for initializing and fetching data, respectively.
