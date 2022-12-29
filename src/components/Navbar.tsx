import { createEffect } from 'solid-js';
import { A, useLocation } from 'solid-start';
export default function NavBar() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600';

  createEffect(() => {
    console.log('path', location.pathname);
  });
  return (
    <>
      <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
            <A href="/">Home</A>
          </li>
          <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
            <A href="/about">About</A>
          </li>
        </ul>
      </nav>
    </>
  );
}
