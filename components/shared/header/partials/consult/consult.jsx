'use client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import { BellRing } from 'lucide-react'
import { useState } from 'react'
import sendMessage from '../../../../../api/telegram'
import './HeaderForm.scss'

const Consult = ({ size, text }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	})

	const [loading, setLoading] = useState(false)

	const [errors, setErrors] = useState({
		email: '',
		phone: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))

		setErrors(prevErrors => ({
			...prevErrors,
			[name]: '',
		}))
	}
	const validateEmail = email => {
		if (email.trim() === '') return true
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const validatePhone = phone => {
		const phoneRegex = /^[\d\s()+-]+$/
		const digitsCount = phone.replace(/\D/g, '').length
		return phoneRegex.test(phone) && digitsCount >= 10 && digitsCount <= 12
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)

		let isValid = true
		let tempErrors = { email: '', phone: '' }

		if (!validateEmail(formData.email)) {
			tempErrors.email = 'Введите корректный email'
			isValid = false
		}

		if (!validatePhone(formData.phone)) {
			tempErrors.phone = 'Введите корректный номер телефона (от 10 до 12 цифр)'
			isValid = false
		}

		setErrors(tempErrors)

		if (!isValid) {
			setLoading(false)
			return
		}

		const templateParams = {
			name: formData.name,
			phone: formData.phone,
			email: formData.email,
		}
		const message = `Запись на  консультацию \n Имя: ${templateParams.name} \n Номер телефона: ${templateParams.phone} \n Email: ${templateParams.email}`
		sendMessage(message)
		setLoading(false)
		setFormData({
			name: '',
			phone: '',
			email: '',
		})
	}
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<div className='consult_trigger flex items-center gap-2 cursor-pointer'>
						<BellRing color='#968c76' size={size} />
						<span className={`text-accent_color text-[${text}px]`}>
							Консультация
						</span>
					</div>
				</DialogTrigger>
				<DialogContent className='z-[102] '>
					<DialogHeader>
						<DialogTitle className='text-center text-accent_color'>
							{' '}
							Заявка на консультацию
						</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
					<div
						className='modal fade'
						id='exampleModal'
						tabIndex='-1'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog'>
							<div className='modal-content '>
								<div className='modal-header' style={{ textAlign: 'center' }}>
									{/* <button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button> */}
								</div>
								<div className='modal-body '>
									{/* <h5 className='modal-title' id='exampleModalLabel'>
									Заявка на консультацию
								</h5> */}
									<form onSubmit={handleSubmit}>
										<div className='group'>
											<input
												type='text'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
												placeholder=' '
											/>
											<span className='bar'></span>
											<label>Имя</label>
										</div>
										<div className='group'>
											<input
												type='text'
												name='phone'
												value={formData.phone}
												onChange={handleChange}
												required
												placeholder=' '
											/>
											<span className='bar'></span>
											<label>Номер телефона</label>
											{errors.phone && (
												<p style={{ color: 'red', textAlign: 'center' }}>
													{errors.phone}
												</p>
											)}
										</div>
										<div className='group'>
											<input
												type='text'
												name='email'
												value={formData.email}
												onChange={handleChange}
												// required
												placeholder=' '
											/>
											<span className='bar'></span>
											<label>Email</label>
											{errors.email && (
												<p style={{ color: 'red', textAlign: 'center' }}>
													{errors.email}
												</p>
											)}
										</div>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '10px',
												textAlign: 'center',
											}}
										>
											<p>
												Нажимая на кнопку, вы даете{' '}
												<span className='color'>
													согласие на обработку персональных данных
												</span>
											</p>
											<button
												className='d-btn modal-button'
												type='submit'
												style={{ color: '#968c76' }}
												disabled={loading}
											>
												{loading ? 'Отправка...' : 'ОСТАВИТЬ ЗАЯВКУ'}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<DialogFooter>
						{/* <Button type='submit'>Save changes</Button> */}
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default Consult
