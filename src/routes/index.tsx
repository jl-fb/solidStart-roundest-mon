import { createSignal } from 'solid-js';
import { A } from 'solid-start';
import server$ from 'solid-start/server';

const getSomeArrayFromServerOrAPI = server$(async () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return {
    data,
  };
});

export default function Home() {
  const [data, setData] = createSignal<number[]>([]);
  const handleClick = () => {
    console.log('DATA');
    getSomeArrayFromServerOrAPI().then((resp) => {
      console.log('DATA', resp.data);
      setData(() => resp.data);
    });
  };

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p>
      {data().map((d) => (
        <p>{d}</p>
      ))}
      <button onclick={() => handleClick()}>clich</button>
    </main>
  );
}
