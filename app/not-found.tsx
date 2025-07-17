import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='pt-[61px] md:pt-[91px] h-screen flex flex-col items-center justify-center bg-white'>
			<h1 className='text-4xl font-bold text-center mb-4'>404 - Страница не найдена</h1>
			<p className='text-lg text-center mb-6'>Извините, запрашиваемая страница не существует.</p>
			<Link href='/' passHref>
				<button className='d-btn' style={{ color: '#968c76' }}>
					На главную
				</button>
			</Link>
		</div>
	);
}
