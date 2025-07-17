import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import './stages-mobile.scss'

const StagesMobile = ({ stages }) => {
	return (
		<div className='stages-mobile'>
			<img src='./development/arrow.svg' alt='scroll' className='scroll' />
			<div className='desktop-content container'>
				<h2 className='cormorant-garamond-bold'>ЭТАПЫ РАЗРАБОТКИ</h2>
				<Accordion
					className='mr-5'
					type='single'
					collapsible
					defaultValue='item-1'
				>
					{stages.titles.map((title, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger className='text-accent_color uppercase'>
								{title}
							</AccordionTrigger>
							<AccordionContent>{stages.screens[index]}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}

export default StagesMobile
