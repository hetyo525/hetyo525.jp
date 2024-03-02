/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATABASE_ID: string;
  readonly NOTION_API_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// TS エラー回避
declare module 'prismjs/components/prism-css';
declare module 'prismjs/components/prism-diff';
declare module 'prismjs/components/prism-docker';
declare module 'prismjs/components/prism-elixir';
declare module 'prismjs/components/prism-go';
declare module 'prismjs/components/prism-hcl';
declare module 'prismjs/components/prism-java';
declare module 'prismjs/components/prism-json';
declare module 'prismjs/components/prism-python';
declare module 'prismjs/components/prism-ruby';
declare module 'prismjs/components/prism-sql';
declare module 'prismjs/components/prism-typescript';
declare module 'prismjs/components/prism-yaml';

// 便利な型
type SomeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type SomeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type SomeNullable<T, K extends keyof T> = Omit<T, K> & { [P in K]: T[P] | null };
