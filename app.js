const heading = React.createElement(
  "h1",
  { id: "head1", key: "head2" },
  "Hello World!."
);
const heading1 = React.createElement(
  "h2",
  { id: "head3", key: "head4" },
  "This is awsome."
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(container);
