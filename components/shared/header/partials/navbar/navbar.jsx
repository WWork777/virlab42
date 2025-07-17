'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import './styles.css'

import { ChevronDown } from 'lucide-react'

const Link = ({ href, ...props }) => {
	const pathname = usePathname()
	const isActive = href == pathname

	return (
		<NavigationMenu.Link asChild active={isActive}>
			<NextLink href={href} className='NavigationMenuLink' {...props} />
		</NavigationMenu.Link>
	)
}

const Navbar = () => {
	return (
		<NavigationMenu.Root className='text-accent_color  font-bold relative'>
			<NavigationMenu.List className='flex justify-around'>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>
						<Link href={'/'}>ГЛАВНАЯ</Link>
					</NavigationMenu.Trigger>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className='flex'>
						УСЛУГИ
						<ChevronDown size={18} color='#968c76' strokeWidth={1.5} />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className='flex flex-col bg-bg_color   absolute left-[15%] top-[110%] p-5'>
						<Link href={'/development'}>Разработка сайтов</Link>
						<Link href={'/ads'}>Продвижение</Link>
						<Link href={'/design'}>Дизайн</Link>
						<Link href={'/3d'}>3D-печать</Link>
						<Link href={'/bots'}>Telegram Боты</Link>
						<Link href={'/taplink'}>Taplink</Link>
						<Link href={'/tilda'}>Tilda</Link>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>
						<Link href={'/projects'}>ПРОЕКТЫ</Link>
					</NavigationMenu.Trigger>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>
						<Link href={'/contacts'}>КОНТАКТЫ</Link>
					</NavigationMenu.Trigger>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className='NavigationMenuIndicator' />
			</NavigationMenu.List>

			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
	)
}

export default Navbar
