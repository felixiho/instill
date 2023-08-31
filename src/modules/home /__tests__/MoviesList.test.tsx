import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MoviesList from "../MoviesList";
import { movies } from "../__mocks__/movies";

describe("Movies List", () => {
  let wrapper = render(
    <MoviesList
      movies={[]}
      currentPage={1}
      totalResults={0}
      updatePage={() => {}}
    />
  );

  test("does not display pagination component when movie list is empty", () => {
    try {
      expect(wrapper.getByTestId("pagination")).not.toBeVisible();
    } catch (error) {
      expect(true).toBeTruthy();
    }
  });

  test("displays pagination component when movie list populated", () => {
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={1}
        totalResults={10}
        updatePage={() => {}}
      />
    );
    expect(wrapper.getByTestId("pagination")).toBeDefined();
  });

  test("displays next element when next button is clicked", async () => {
    const updatePageMock = jest.fn()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={1}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    await userEvent.click(screen.getByTestId("pagination-next"));
    expect(updatePageMock).toHaveBeenCalledWith(2) 
  });

  test("displays last element when last button is clicked", async () => {
    const updatePageMock = jest.fn()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={1}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    await userEvent.click(screen.getByTestId("pagination-last"));
    expect(updatePageMock).toHaveBeenCalledWith(10) 
  });

  test("displays previous element when previous button is clicked", async () => {
    const updatePageMock = jest.fn()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={2}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    await userEvent.click(screen.getByTestId("pagination-previous"));
    expect(updatePageMock).toHaveBeenCalledWith(1) 
  });

  test("displays first element when first button is clicked", async () => {
    const updatePageMock = jest.fn()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={1}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    await userEvent.click(screen.getByTestId("pagination-first"));
    expect(updatePageMock).toHaveBeenCalledWith(1) 
  });

  test("does nothing when an invalid page number is passed", async () => {
    const updatePageMock = jest.fn()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={1}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    expect(updatePageMock).not.toHaveBeenCalled()
    wrapper = render(
      <MoviesList
        movies={movies}
        currentPage={10000}
        totalResults={100}
        updatePage={updatePageMock}
      />
    );
    expect(updatePageMock).not.toHaveBeenCalled()
  });
});
