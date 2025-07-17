import Image from 'next/image'
import plug from './img/plug.png'
const Plug = () => {
	return (
		<div className='my-5'>
			<Image className='mx-auto' src={plug} alt='plug' />
		</div>
	)
}

export default Plug
