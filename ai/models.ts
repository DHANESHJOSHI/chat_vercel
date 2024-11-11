// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'llama-3.1-70b-versatile',
    label: 'LLAMA3 70b',
    apiIdentifier: 'llama-3.1-70b-versatile',
    description: 'Small model for fast, lightweight tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemma2-9b-it';
