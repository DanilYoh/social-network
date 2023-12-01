export const getStorage = (key: string): string | null =>
  localStorage.getItem(key);

export const setStorage = (key: string, val: string): void =>
  localStorage.setItem(key, val);

export const clickCheckbox = () => {
  if (getStorage('admin')) {
    localStorage.clear();
  }
};
