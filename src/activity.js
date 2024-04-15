/**
 * Fetches a random activity using the Fetch API and updates the HTML element with the fetched activity.
 */
export function getRandomActivity() {
    fetch('https://www.boredapi.com/api/activity/')
     .then(response => response.json())
     .then(data => {
        const element = document.getElementById("activity");
        element.textContent = data.activity;
     }).catch(error => {
      const element = document.getElementById("activity");
      element.textContent = "К сожалению, произошла ошибка";
     })
}

/**
 * Fetches a random activity using async/await and updates the HTML element with the fetched activity.
 */
export async function getRandomActivityUsingAsyncAwait() {
try {
   const response = await fetch('https://www.boredapi.com/api/activity/');
   const data = await response.json();
   const element = document.getElementById("activity");
   element.textContent = data.activity;
} catch (err) {
   console.log("К сожалению, произошла ошибка");
}
}

/**
 * Fetches a random activity using async/await and returns it.
 * @returns {Promise<string>} A Promise that resolves to the fetched activity.
 */
export async function getRandomActivityUsingReturn() {
   try {
      const response = await fetch('https://www.boredapi.com/api/activity/');
      const data = await response.json();
      return data.activity;
   } catch (err) {
      console.log("К сожалению, произошла ошибка");
   }
   }

 /**
 * Updates the activity displayed on the HTML page periodically.
 * Uses getRandomActivityUsingReturn to fetch a new activity.
 */  
export function updateActivity() {
   getRandomActivityUsingReturn().then(activity => {
   document.getElementById("activity").textContent = activity;
   }).catch(error => {
      document.getElementById("activity").textContent = "К сожалению, произошла ошибка";
   })
   setTimeout(updateActivity, 60000);
}