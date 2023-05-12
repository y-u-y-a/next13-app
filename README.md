### Create new Next.js project

```shell
# npx create-next-app --example with-tailwindcss rsc-supabase --use-npm
npx create-next-app@13.4.1 --tailwind rsc-supabase --use-npm
npm i @heroicons/react@2.0.17 @supabase/auth-helpers-nextjs@0.6.1 @supabase/supabase-js@2.21.0 zustand@4.3.8 supabase@1.55.1 date-fns@2.30.0
npm i next@13.4.1
```

### Generate supabase types

```shell
npx supabase login
npx supabase init
npx supabase link --project-ref your_project_id
npx supabase gen types typescript --linked > database.types.ts
```

### Install Libraries

#### ESLint and Prettier

```shell:
yarn add -D eslint eslint-config-next eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
