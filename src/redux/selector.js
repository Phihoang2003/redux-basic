import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPropertiesSelector = (state) => state.filters.properties;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  searchTextSelector,
  filterPropertiesSelector,
  filterStatusSelector,
  todoListSelector,
  (searchText, properties, status, todoList) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return properties.length
          ? todo.name.includes(searchText) && properties.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (properties.lenght ? properties.includes(todo.prioriry) : true)
      );
    });
  }
);
