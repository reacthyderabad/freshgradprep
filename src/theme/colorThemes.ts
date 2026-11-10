interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  highlight: string;
}

export const freshgradTheme1: ColorTheme = {
  primary: '#043a7e',
  secondary: '#e8e3cc',
  accent: '#664801',
  highlight: '#db3f29',
};

export const freshgradTheme2: ColorTheme = {
  primary: '#043a7e',
  secondary: '#50c878',
  accent: '#9966cc',
  highlight: '#cfb53b',
};

export const freshgradTheme3: ColorTheme = {
  primary: '#043a7e',
  secondary: '#007eff',
  accent: '#ffbf00',
  highlight: '#807040',
};

export const freshgradTheme4: ColorTheme = {
  primary: '#043a7e',
  secondary: '#007eff',
  accent: '#e38a36',
  highlight: '#807040',
};

export const freshgradTheme5: ColorTheme = {
  primary: '#043a7e',
  secondary: '#28bce5',
  accent: '#6d8196',
  highlight: '#fffafa',
};

export const freshgradTheme5b: ColorTheme = {
  primary: '#6d8196',
  secondary: '#28bce5',
  accent: '#fffafa',
  highlight: '#043a7e',
};

export const freshgradTheme6: ColorTheme = {
  primary: '#043A7E',
  secondary: '#3B4248',
  accent: '#1A936F',
  highlight: '#e38a36',
};

export const freshgradTheme6b: ColorTheme = {
  primary: '#3B4248',
  secondary: '#e38a36',
  accent: '#043A7E',
  highlight: '#1A936F',
};

export const freshgradTheme6c: ColorTheme = {
  primary: '#3B4248',
  secondary: '#e38a36',
  accent: '#043A7E',
  highlight: '#28bce5',
};

export const themeList: { name: string; colors: ColorTheme }[] = [
  { name: 'Theme 1', colors: freshgradTheme1 },
  { name: 'Theme 2', colors: freshgradTheme2 },
  { name: 'Theme 3', colors: freshgradTheme3 },
  { name: 'Theme 4', colors: freshgradTheme4 },
  { name: 'Theme 5', colors: freshgradTheme5 },
  { name: 'Theme 5b', colors: freshgradTheme5b },
  { name: 'Theme 6', colors: freshgradTheme6 },
  { name: 'Theme 6b', colors: freshgradTheme6b },
  { name: 'Theme 6c', colors: freshgradTheme6c },
];

export type { ColorTheme };
