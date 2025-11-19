export const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
  catch { return fallback }
}
export const save = (key, val) => localStorage.setItem(key, JSON.stringify(val))