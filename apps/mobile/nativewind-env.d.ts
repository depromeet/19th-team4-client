/// <reference types="react-native-css/types" />

// global.css 같은 side-effect CSS import 타입 선언 (TS 6 의 noUncheckedSideEffectImports 대응)
declare module '*.css';
