export const ADD_TO_BOOKMARKS = "ADD_TO_BOOKMARKS";

export const addToBookmarks = (addBookmark) => ({
  type: ADD_TO_BOOKMARKS,
  payload: { addBookmark },
});
