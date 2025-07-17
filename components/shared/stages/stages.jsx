'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import StagesDesktop from './stagesDesktop/StagesDesktop'
import StagesMobile from './stagesMobile/stages-mobile'
const Stages = ({ stages }) => {
	const isDesktop = useMediaQuery('(min-width: 992px)')
	if (isDesktop) {
		return <StagesDesktop stages={stages} />
	}
	return <StagesMobile stages={stages} />
}

export default Stages
