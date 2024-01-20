import { component$ } from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";

export const test = server$(async function(message: string) { 
  console.log('test', message);
  return "hey  " + message;
})
export default component$(() => {
  return (
    <>
    <button onClick$={()=> { 
      test('test').then(console.log)
    }}>
      Test
    </button>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
