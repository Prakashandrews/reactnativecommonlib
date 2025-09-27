// This file exports TypeScript types and interfaces for the common UI library.

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
}

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: object;
}

export interface CardProps {
  title: string;
  content: string;
  style?: object;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

export interface FetchResponse<T> {
  data: T;
  error: string | null;
  loading: boolean;
}