'use client'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const Maps = () => {
	return (
		<YMaps>
			<div className='map-container'>
				<Map 
					defaultState={{ center: [55.356677, 86.074873], zoom: 17 }}
					options={{ scrollZoom: false }}
				>
					<Placemark 
						geometry={[55.356677, 86.074873]} 
						options={{ 
							preset: 'islands#redDotIcon', // использует красный маркер
						}} 
						properties={{
							hintContent: 'ВИРЛАБ', // создаёт всплывающую подсказку с текстом 'ВИРЛАБ'
							balloonContent: 'ВИРЛАБ' // создаёт контент в баллоне с текстом 'ВИРЛАБ'
						}}
					/>
				</Map>
			</div>
		</YMaps>
	)
}

export default Maps
