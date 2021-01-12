import React from "react";
import { RouterContext } from "blitz";
import { render as defaultRender } from "@testing-library/react";
import { renderHook as defaultRenderHook } from "@testing-library/react-hooks";
export * from "@testing-library/react"; // --------------------------------------------------------------------------------
// This file customizes the render() and renderHook() test functions provided
// by React testing library. It adds a router context wrapper with a mocked router.
//
// You should always import `render` and `renderHook` from this file
//
// This is the place to add any other context providers you need while testing.
// --------------------------------------------------------------------------------
// --------------------------------------------------
// render()
// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------

export function render(ui, {
  wrapper,
  router,
  ...options
} = {}) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = ({
      children
    }) => <RouterContext.Provider value={{ ...mockRouter,
      ...router
    }}>
        {children}
      </RouterContext.Provider>;
  }

  return defaultRender(ui, {
    wrapper,
    ...options
  });
} // --------------------------------------------------
// renderHook()
// --------------------------------------------------
// Override the default test renderHook with our own
//
// You can override the router mock like this:
//
// const result = renderHook(() => myHook(), {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------

export function renderHook(hook, {
  wrapper,
  router,
  ...options
} = {}) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = ({
      children
    }) => <RouterContext.Provider value={{ ...mockRouter,
      ...router
    }}>
        {children}
      </RouterContext.Provider>;
  }

  return defaultRenderHook(hook, {
    wrapper,
    ...options
  });
}
export const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  params: {},
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  isFallback: false
};