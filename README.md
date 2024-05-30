This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Description

This project contains 8 sections located in ./app/pages
[x] header.jsx
[x] events.jsx
[x] thingsToKnow.jsx
[x] ads.jsx
[x] faq.jsx
[x] pharmacies.jsx
[x] about.jsx
[x] footer.jsx

I created some extra components for a few of the sections to clean up my code for mobile optimization
- header.jsx contains 2 components
    - headerSm.jsx applies to small media optimization
        [x] nav bar is flex column 
        [x] header height is 25% 
    - headerOther.jsx applies to medium and large media optimization
        [x] nav bar is flex row
        [x] header height is 75vh

- events.jsx contains 2 compontnets eventsLg.jsx and eventsOther.jsx
    - These are both pretty simular in styling
    - I made this decicion to clean up the tailwind styling

- ads.jsx contains 2 components adsLg.jsx and adsOther.jsx
    - Both of these have simular as well in styling, but there were a few text layout changes that were making my tailwind stylings messy.
    - adsLg.jsx applies to large media optimization
    - adsOther.jsx applies to medium and small media optimization

Plans to clean up this project further
- all .jsx files
    [] create components that contains all of the text and hrefs to allow a non-coder to edit without having to do major surgery in many files
    
- events.jsx
    [] create reuseable function that inputs location, date, time, and renewal requirement and creates an event container that incultes a book time button 




