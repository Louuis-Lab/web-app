import Image from 'next/image';

export default function Header() {
  return (
     <div className='flex justify-between items-center p-4 bg-white text-3xl'>
        <Image src="/big-logo.png" alt="Logo" width={250} height={60} />
        <section>
            <a href="#" className='p-4 text-gray-600 hover:text-gray-900'>Home</a>
            <a href="#" className='p-4 text-gray-600 hover:text-gray-900'>About</a>
            <a href="#" className='p-4 text-gray-600 hover:text-gray-900'>Services</a>
            <a href="#" className='p-4 text-gray-600 hover:text-gray-900'>Contact</a>
        </section>
        <Image src="/small-logo.png" alt="Menu" width={400} height={400} />
     </div>
  );
}   