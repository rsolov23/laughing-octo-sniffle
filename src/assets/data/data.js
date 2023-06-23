import router from "../images/reactrouter.png";
import hook from "../images/hook.jpg";
import cr from "../images/cr.png";
import devtools from "../images/devtools.png";
import props from "../images/cover.png";
import life from "../images/life.png";
// Mock data array
// It defines a constant mockData that holds an array of objects, each representing a product with an id and a name.

export const mockData = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
  { id: 4, name: "Product D" },
  { id: 5, name: "Product E" },
];
// data for header cards
export const cards = [
  {
    id: 1,
    link: "https://reactrouter.com/en/main",
    image: router,
    title: "React Router",
    description:
      "React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.",
    name: "React",
  },

  {
    id: 3,
    link: "https://react.dev/reference/react",
    image: hook,

    title: "Hooks",
    description:
      "React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.",
    name: "React",
  },
  {
    id: 4,
    link: "https://react.dev/learn/conditional-rendering",
    image: cr,

    title: "Conditional Rendering",
    description:
      "Conditional Rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions. In this process, you can use conditional statements to decide what content should be rendered.",
    name: "React",
  },
  {
    id: 5,
    link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi#:~:text=React%20Developer%20Tools%20is%20a,%22%20and%20%22%E2%9A%9B%EF%B8%8F%20Profiler%22.",
    image: devtools,

    title: "React Dev Tools",
    description:
      "React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools. You will get two new tabs in your Chrome DevTools: 'Components' and ' Profiler'.",
    name: "React",
  },
  {
    id: 6,
    link: "https://react.dev/learn/passing-props-to-a-component",
    image: props,

    title: "Props",
    description:
      "In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.",
    name: "React",
  },
  {
    id: 7,
    link: "https://react.dev/learn/passing-props-to-a-component",
    image: life,

    title: "Lifecycle Methods",
    description:
      "There are three categories of lifecycle methods: mounting, updating, and unmounting. A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called. The first time that a component instance renders, it does not update.",
    name: "React",
  },
];


