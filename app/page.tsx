import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function staticUrl(path:string):string {
  return `${process.env.NEXT_PUBLIC_STATIC_PREFIX}${path}`;
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <img src={staticUrl('/volleyball-cover.png')} className="max-w-screen-md " /> 
    </main>
  );
}
