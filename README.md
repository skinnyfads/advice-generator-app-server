# advice-generator-app-server

This is the api i made for my website https://advice-generator-app-skinnyfads.vercel.app/

## Usage

In order to get random advice, you need to make an api call 

For example:

```ts
(async () => {
  const baseUrl = "https://ill-gray-centipede-wear.cyclic.app";
  const response = await fetch(baseUrl + "/advices");
  const advice = await response.json();

  console.log(advice);
})();

```

Then you will likely get the following response:

```json
{
  "_id": "63c58381e8a99018ad4c8268",
  "id": 10,
  "text": "The secret of getting ahead is getting started.",
  "__v": 0
}
```

## Trick

There is a possibility when make an api call 
but you still get the same advice as before

To handle that you can create a custom function like this:

```ts
async function getRandomAdvice() {
  const baseUrl = "https://ill-gray-centipede-wear.cyclic.app";
  const response = await fetch(baseUrl + "/advices");
  const advice = await response.json();
  
  const adviceId = advice.id;

  if (adviceId === getRandomAdvice.lastId) {
    return getRandomAdvice();
  } 
  getRandomAdvice.lastId = adviceId;
  return advice;
}
getRandomAdvice.lastId = undefined;
```

Then you can call it wherever in your code

For example call the function when the entire page is loaded:

```ts
window.onload = async () => {
  const advice = await getRandomAdvice();
  console.log(advice);
};
```
