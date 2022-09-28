export const localStorageNote = (key, defaultValue) => {
  const get = () => localStorage.getItem(key) || JSON.stringify(defaultValue);
  const set = (value) => localStorage.setItem(key, JSON.stringify(value));
  const remove = () => localStorage.removeItem(key);
  return {
    get,
    set,
    remove,
  };
};
export const localStorageKey = {
  noteItem: "NOTE_ITEM",
};
