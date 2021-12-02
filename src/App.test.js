import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

Enzyme.configure({ adapter: new Adapter() });
test("renders learn react link", () => {
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  render(wrapper);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
