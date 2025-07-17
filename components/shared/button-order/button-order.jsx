const ButtonOrder = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='d-btn mt-5 ms-3 w-auto d-block'
			data-bs-toggle='modal'
			data-bs-target='#exampleModal'
		>
			ЗАКАЗАТЬ <span className='hidden lg:inline-block '>ЭФФЕКТИВНЫЙ</span> САЙТ
		</button>
	)
}

export default ButtonOrder
