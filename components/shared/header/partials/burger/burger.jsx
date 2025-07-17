import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ChevronDown, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Menu } from 'lucide-react'
import Consult from '../consult/consult'
import BurgerSocials from './burger-socials'

export function Burger() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className=' bg-transparent border rounded-md px-1 border-accent_color cursor-pointer md:hidden ml-auto'>
					<Menu size={32} color='#968c76' strokeWidth={1} />
				</div>
			</SheetTrigger>
			<SheetContent side={'top'} className='bg-bg_color border-none  z-[101]'>
				<SheetHeader className='border-b border-accent_color'>
					<SheetTitle className='text-accent_color text-2xl'>
						<SheetClose asChild>
							<Link href={'/'}>VIRLAB</Link>
						</SheetClose>
					</SheetTitle>
					<SheetDescription className='text-accent_color text-sm pb-1'>
						По-настоящему продающие сайты
					</SheetDescription>
				</SheetHeader>
				<div className='flex justify-between gap-x-1 items-center'>
					<div className='py-5 flex flex-col gap-y-4'>
						<SheetClose asChild>
							<a
								className='text-accent_color flex items-center gap-2  text-[12px] sm:text-[14px]'
								href='tel:89994312666'
							>
								<Phone size={25} color='#968c76' strokeWidth={1.5} />
								+7 (999) 431-26-66
							</a>
						</SheetClose>
						<SheetClose asChild>
							<a
								className='text-accent_color flex items-center gap-2  text-[12px] sm:text-[14px]'
								href='mailto:virlab42@mail.ru'
							>
								<Mail size={25} color='#968c76' strokeWidth={1.5} />
								virlab42@mail.ru
							</a>
						</SheetClose>
						<SheetClose asChild>
							<Consult size={25} text={14} />
						</SheetClose>
						<BurgerSocials />
					</div>
					<div>
						<NavigationMenu.Root className='text-accent_color'>
							<NavigationMenu.List className='flex items-end flex-col gap-y-2'>
								<NavigationMenu.Item>
									<SheetClose asChild>
										<Link href={'/'}>ГЛАВНАЯ</Link>
									</SheetClose>
								</NavigationMenu.Item>
								<NavigationMenu.Item className='flex flex-col items-end'>
									<NavigationMenu.Trigger className='flex items-center border-none outline-none'>
										<ChevronDown size={18} color='#968c76' strokeWidth={1.5} />
										УСЛУГИ
									</NavigationMenu.Trigger>
									<NavigationMenu.Content>
										<NavigationMenu.Sub defaultValue='sub1'>
											<NavigationMenu.List className='flex flex-col gap-y-1 text-accent_color  py-2 bg-bg_color'>
												<NavigationMenu.Item value='sub1'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/development'}
														>
															Разработка сайтов
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/ads'}
														>
															Продвижение{' '}
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/design'}
														>
															Дизайн
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/3d'}
														>
															3D-печать{' '}
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/bots'}
														>
															Telegram Боты
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/taplink'}
														>
															Taplink
														</Link>
													</SheetClose>
												</NavigationMenu.Item>

												<NavigationMenu.Item value='sub2'>
													<SheetClose asChild>
														<Link
															className='flex justify-end text-[11px] xs:text-base'
															href={'/tilda'}
														>
															Tilda
														</Link>
													</SheetClose>
												</NavigationMenu.Item>
											</NavigationMenu.List>
										</NavigationMenu.Sub>
									</NavigationMenu.Content>
								</NavigationMenu.Item>
								<NavigationMenu.Item>
									<SheetClose asChild>
										<Link href={'/projects'}>ПРОЕКТЫ</Link>
									</SheetClose>
								</NavigationMenu.Item>
								<NavigationMenu.Item>
									<SheetClose asChild>
										<Link href={'/contacts'}>КОНТАКТЫ</Link>
									</SheetClose>
								</NavigationMenu.Item>
							</NavigationMenu.List>
						</NavigationMenu.Root>
					</div>
				</div>

				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
