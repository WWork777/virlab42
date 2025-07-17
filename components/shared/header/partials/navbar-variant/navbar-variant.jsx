'use client'
import { CaretDownIcon } from '@radix-ui/react-icons'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import logo from './logo.jpg'
import './styles.css'

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<NextLink
					className={classNames('ListItemLink', className)}
					{...props}
					ref={forwardedRef}
				>
					<div className='ListItemHeading'>{title}</div>
					<p className='ListItemText'>{children}</p>
				</NextLink>
			</NavigationMenu.Link>
		</li>
	)
)
ListItem.displayName = 'ListItem'

export default function NavbarVariant() {
	const scrollToOrder = () => {
		const element = document.getElementById('main-form')
		const offset = 200
		const elementPosition = element.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.pageYOffset - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}

	return (
		<NavigationMenu.Root className='NavigationMenuRoot'>
			<NavigationMenu.List className='NavigationMenuList'>
				<NavigationMenu.Item>
					<NextLink className='NavigationMenuLink' href='/'>
						ГЛАВНАЯ
					</NextLink>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className='NavigationMenuTrigger'>
						О НАС{' '}
						<CaretDownIcon color='#968c76' className='CaretDown' aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className='NavigationMenuContent '>
						<ul className='List one'>
							<li style={{ gridRow: 'span 3' }}>
								<NavigationMenu.Link asChild>
									<NextLink className='Callout' href='/'>
										<Image
											width={'100%'}
											height={'100%'}
											src={logo}
											alt='logo'
										/>
										<div className='CalloutHeading text-center text-accent_color'>
											VIRLAB
										</div>
										<p className='CalloutText text-center text-accent_color'>
											По-настоящему работающие сайты
										</p>
									</NextLink>
								</NavigationMenu.Link>
							</li>

							<ListItem onClick={e => e.preventDefault()} href='#!' title='ИНН'>
								424604071541
							</ListItem>
							<ListItem
								onClick={e => e.preventDefault()}
								href='#!'
								title='ОГРН'
							>
								323420500005352
							</ListItem>
							<ListItem
								href='javascript:void(0)'
								title='ОСТАВИТЬ ЗАЯВКУ'
								onClick={scrollToOrder}
							>
								Свяжитесь с нами
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className='NavigationMenuTrigger'>
						УСЛУГИ{' '}
						<CaretDownIcon color='#968c76' className='CaretDown' aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className='NavigationMenuContent'>
						<ul className='List two'>
							<ListItem title='Разработка сайтов' href='/development'>
								Разработка сайтов на React, Laravel итд...
							</ListItem>
							<ListItem title='Продвижение сайтов' href='/seo'>
								SEO-оптимизация, Яндекс.Директ, Google итд...
							</ListItem>
							<ListItem title='Дизайн' href='/design'>
								Логотипы, баннеры, монтаж видео итд...
							</ListItem>
							<ListItem title='Телеграм-боты' href='/bots'>
								Боты для приема заявок.
							</ListItem>
							<ListItem title='3D-печать' href='/printing'>
								Моделирование. Печать
							</ListItem>
							{/* <ListItem title="Releases" href="/primitives/docs/overview/releases">
                                Radix Primitives releases and their changelogs.
                            </ListItem> */}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NextLink className='NavigationMenuLink' href='projects'>
						ПРОЕКТЫ
					</NextLink>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NextLink className='NavigationMenuLink' href='/contacts'>
						КОНТАКТЫ
					</NextLink>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className='NavigationMenuIndicator'>
					<div className='Arrow' />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className='ViewportPosition'>
				<NavigationMenu.Viewport className='NavigationMenuViewport' />
			</div>
		</NavigationMenu.Root>
	)
}
