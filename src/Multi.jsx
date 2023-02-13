import React from 'react'
import './App.css'

const Multi = ({ stats }) => {
	function Match2() {
		return (
			<div id='multi'>
				<svg
					id='Layer_1'
					stats-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					width='1920'
					height='1080'>
					<g id='dash1'>
						<path
							d='M246.13,33.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='home1'>
						<rect x='180.21' width='54.29' height='60' fill='none' />
						<rect x='3.77' width='168.81' height='60' fill='none' />
					</g>
					<g id='away1'>
						<rect
							x='269.77'
							y='1.2'
							width='54.29'
							height='60'
							transform='translate(593.83 62.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='1.2'
							width='168.81'
							height='60'
							transform='translate(832.73 62.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<text
						transform='translate(90.45 40.29) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 41.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].awayshortlabel}</tspan>
					</text>
					<text transform='translate(190.77 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].homescorepoints}</tspan>
					</text>
					<text transform='translate(295.87 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].awayscorepoints}</tspan>
					</text>
				</svg>
			</div>
		)
	}
	function Match3() {
		return (
			<div id='multi'>
				<svg
					id='Layer_1'
					stats-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1920 1080'>
					<g id='line1-2'>
						<line y1='64.5' x2='503.92' y2='67.5' fill='#fff' />
						<path
							d='M0,64.5C71.12,61.57,179.82,64,252,64c65.4.78,171.76-.15,255.2,2.84L504,67.5l-15.78.5C424.1,70.22,317.06,68,252,68,179.5,67.18,71.5,68.28,0,64.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash1'>
						<path
							d='M246.13,33.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash2'>
						<path
							d='M246.13,105.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='home1'>
						<rect x='180.21' width='54.29' height='60' fill='none' />
						<rect x='3.77' width='168.81' height='60' fill='none' />
					</g>
					<g id='home2'>
						<rect x='180.47' y='73.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='73.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='away1'>
						<rect
							x='269.77'
							y='1.2'
							width='54.29'
							height='60'
							transform='translate(593.83 62.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='1.2'
							width='168.81'
							height='60'
							transform='translate(832.73 62.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away2'>
						<rect
							x='269.77'
							y='73.2'
							width='54.29'
							height='60'
							transform='translate(593.83 206.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='73.2'
							width='168.81'
							height='60'
							transform='translate(832.73 206.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<text
						transform='translate(90.45 40.29) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 113.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 41.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 113.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].awayshortlabel}</tspan>
					</text>
					<text transform='translate(190.77 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].homescorepoints}</tspan>
					</text>
					<text transform='translate(295.87 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].awayscorepoints}</tspan>
					</text>
					<text transform='translate(295.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].awayscorepoints}</tspan>
					</text>
				</svg>
			</div>
		)
	}
	function Match4() {
		return (
			<div id='multi'>
				<svg
					id='Layer_1'
					stats-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1920 1080'>
					<g id='line1-2'>
						<line y1='64.5' x2='503.92' y2='67.5' fill='#fff' />
						<path
							d='M0,64.5C71.12,61.57,179.82,64,252,64c65.4.78,171.76-.15,255.2,2.84L504,67.5l-15.78.5C424.1,70.22,317.06,68,252,68,179.5,67.18,71.5,68.28,0,64.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line2-3'>
						<line y1='138.5' x2='503.92' y2='139.5' fill='#fff' />
						<path
							d='M0,138.5c71.11-3.21,179.81-1.25,252-1.5,65.4.52,171.75-.83,255.21,1.9l15.75.6-15.75.53c-64.06,2.48-171.11.71-255.22,1C179.5,140.46,71.5,142,0,138.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash1'>
						<path
							d='M246.13,33.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash2'>
						<path
							d='M246.13,105.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash3'>
						<path
							d='M246.13,177.75h11.66a2.25,2.25,0,0,0,0-4.5H246.13a2.25,2.25,0,0,0,0,4.5Z'
							fill='#fff'
						/>
					</g>
					<g id='home1'>
						<rect x='180.21' width='54.29' height='60' fill='none' />
						<rect x='3.77' width='168.81' height='60' fill='none' />
					</g>
					<g id='home2'>
						<rect x='180.47' y='73.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='73.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home3'>
						<rect x='180.47' y='145.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='145.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='away1'>
						<rect
							x='269.77'
							y='1.2'
							width='54.29'
							height='60'
							transform='translate(593.83 62.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='1.2'
							width='168.81'
							height='60'
							transform='translate(832.73 62.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away2'>
						<rect
							x='269.77'
							y='73.2'
							width='54.29'
							height='60'
							transform='translate(593.83 206.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='73.2'
							width='168.81'
							height='60'
							transform='translate(832.73 206.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away3'>
						<rect
							x='269.77'
							y='145.2'
							width='54.29'
							height='60'
							transform='translate(593.83 350.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='145.2'
							width='168.81'
							height='60'
							transform='translate(832.73 350.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<text
						transform='translate(90.45 40.29) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 113.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 185.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 41.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 113.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 184.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayshortlabel}</tspan>
					</text>
					<text transform='translate(190.77 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 180)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[3].homescorepoints}</tspan>
					</text>
					<text transform='translate(295.87 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].awayscorepoints}</tspan>
					</text>
					<text transform='translate(295.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 180.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayscorepoints}</tspan>
					</text>
				</svg>
			</div>
		)
	}
	function Match5() {
		return (
			<div id='multi'>
				<svg
					id='Layer_1'
					stats-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1920 1080'>
					<g id='line1-2'>
						<line y1='64.5' x2='503.92' y2='67.5' fill='#fff' />
						<path
							d='M0,64.5C71.12,61.57,179.82,64,252,64c65.4.78,171.76-.15,255.2,2.84L504,67.5l-15.78.5C424.1,70.22,317.06,68,252,68,179.5,67.18,71.5,68.28,0,64.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line2-3'>
						<line y1='138.5' x2='503.92' y2='139.5' fill='#fff' />
						<path
							d='M0,138.5c71.11-3.21,179.81-1.25,252-1.5,65.4.52,171.75-.83,255.21,1.9l15.75.6-15.75.53c-64.06,2.48-171.11.71-255.22,1C179.5,140.46,71.5,142,0,138.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line3-4'>
						<line y1='209.5' x2='503.92' y2='211.5' fill='#fff' />
						<path
							d='M0,209.5c71.12-3.07,179.82-.9,252-1,65.4.65,171.75-.49,255.2,2.37l15.75.63-15.75.5c-64.07,2.35-171.11.37-255.22.5C179.5,211.82,71.5,213.14,0,209.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash1' transform='translate(12)'>
						<path
							d='m 246.13,33.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path199'
						/>
					</g>
					<g id='dash2' transform='translate(12)'>
						<path
							d='m 246.13,105.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path202'
						/>
					</g>
					<g id='dash3' transform='translate(12)'>
						<path
							d='m 246.13,177.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path205'
						/>
					</g>
					<g id='dash4' transform='translate(12)'>
						<path
							d='m 246.13,249.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path208'
						/>
					</g>

					<g id='home1'>
						<rect x='180.21' width='54.29' height='60' fill='none' />
						<rect x='3.77' width='168.81' height='60' fill='none' />
					</g>
					<g id='home2'>
						<rect x='180.47' y='73.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='73.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home3'>
						<rect x='180.47' y='145.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='145.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home4'>
						<rect x='180.47' y='217.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='217.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='away1'>
						<rect
							x='269.77'
							y='1.2'
							width='54.29'
							height='60'
							transform='translate(593.83 62.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='1.2'
							width='168.81'
							height='60'
							transform='translate(832.73 62.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away2'>
						<rect
							x='269.77'
							y='73.2'
							width='54.29'
							height='60'
							transform='translate(593.83 206.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='73.2'
							width='168.81'
							height='60'
							transform='translate(832.73 206.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away3'>
						<rect
							x='269.77'
							y='145.2'
							width='54.29'
							height='60'
							transform='translate(593.83 350.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='145.2'
							width='168.81'
							height='60'
							transform='translate(832.73 350.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away4'>
						<rect
							x='269.77'
							y='217.2'
							width='54.29'
							height='60'
							transform='translate(593.83 494.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='217.2'
							width='168.81'
							height='60'
							transform='translate(832.73 494.4) rotate(-180)'
							fill='none'
						/>
					</g>

					<text
						transform='translate(90.45 40.29) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 113.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 185.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.38 257.04) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[4].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 41.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 113.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 184.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 257.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[4].awayshortlabel}</tspan>
					</text>
					<text transform='translate(190.77 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 180)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[3].homescorepoints}</tspan>
					</text>
					<text
						transform='translate(190.87 255.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[4].homescorepoints}</tspan>
					</text>
					<text transform='translate(295.87 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].awayscorepoints}</tspan>
					</text>
					<text transform='translate(295.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 180.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 255.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[4].awayscorepoints}</tspan>
					</text>
				</svg>
			</div>
		)
	}
	function Match6() {
		return (
			<div id='multi'>
				<svg
					id='Layer_1'
					stats-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1920 1080'>
					<g id='line1-2'>
						<line y1='64.5' x2='503.92' y2='67.5' fill='#fff' />
						<path
							d='M0,64.5C71.12,61.57,179.82,64,252,64c65.4.78,171.76-.15,255.2,2.84L504,67.5l-15.78.5C424.1,70.22,317.06,68,252,68,179.5,67.18,71.5,68.28,0,64.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line2-3'>
						<line y1='138.5' x2='503.92' y2='139.5' fill='#fff' />
						<path
							d='M0,138.5c71.11-3.21,179.81-1.25,252-1.5,65.4.52,171.75-.83,255.21,1.9l15.75.6-15.75.53c-64.06,2.48-171.11.71-255.22,1C179.5,140.46,71.5,142,0,138.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line3-4'>
						<line y1='209.5' x2='503.92' y2='211.5' fill='#fff' />
						<path
							d='M0,209.5c71.12-3.07,179.82-.9,252-1,65.4.65,171.75-.49,255.2,2.37l15.75.63-15.75.5c-64.07,2.35-171.11.37-255.22.5C179.5,211.82,71.5,213.14,0,209.5Z'
							fill='#fff'
						/>
					</g>
					<g id='line4-5'>
						<line y1='281.5' x2='503.92' y2='283.5' fill='#fff' />
						<path
							d='M0,281.5c71.12-3.07,179.82-.9,252-1,65.4.65,171.75-.49,255.2,2.37l15.75.63-15.75.5c-64.07,2.35-171.11.37-255.22.5C179.5,283.82,71.5,285.14,0,281.5Z'
							fill='#fff'
						/>
					</g>
					<g id='dash1' transform='translate(12)'>
						<path
							d='m 246.13,33.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path199'
						/>
					</g>
					<g id='dash2' transform='translate(12)'>
						<path
							d='m 246.13,105.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path202'
						/>
					</g>
					<g id='dash3' transform='translate(12)'>
						<path
							d='m 246.13,177.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path205'
						/>
					</g>
					<g id='dash4' transform='translate(12)'>
						<path
							d='m 246.13,249.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path208'
						/>
					</g>
					<g id='dash5' transform='translate(12)'>
						<path
							d='m 246.13,321.75 h 11.66 a 2.25,2.25 0 0 0 0,-4.5 h -11.66 a 2.25,2.25 0 0 0 0,4.5 z'
							fill='#fcd34c'
							id='path211'
						/>
					</g>
					<g id='home1'>
						<rect x='180.21' width='54.29' height='60' fill='none' />
						<rect x='3.77' width='168.81' height='60' fill='none' />
					</g>
					<g id='home2'>
						<rect x='180.47' y='73.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='73.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home3'>
						<rect x='180.47' y='145.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='145.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home4'>
						<rect x='180.47' y='217.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='217.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='home5'>
						<rect x='180.47' y='289.2' width='54.29' height='60' fill='none' />
						<rect x='3.77' y='289.2' width='168.81' height='60' fill='none' />
					</g>
					<g id='away1'>
						<rect
							x='269.77'
							y='1.2'
							width='54.29'
							height='60'
							transform='translate(593.83 62.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='1.2'
							width='168.81'
							height='60'
							transform='translate(832.73 62.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away2'>
						<rect
							x='269.77'
							y='73.2'
							width='54.29'
							height='60'
							transform='translate(593.83 206.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='73.2'
							width='168.81'
							height='60'
							transform='translate(832.73 206.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away3'>
						<rect
							x='269.77'
							y='145.2'
							width='54.29'
							height='60'
							transform='translate(593.83 350.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='145.2'
							width='168.81'
							height='60'
							transform='translate(832.73 350.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away4'>
						<rect
							x='269.77'
							y='217.2'
							width='54.29'
							height='60'
							transform='translate(593.83 494.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='217.2'
							width='168.81'
							height='60'
							transform='translate(832.73 494.4) rotate(-180)'
							fill='none'
						/>
					</g>
					<g id='away5'>
						<rect
							x='269.77'
							y='289.2'
							width='54.29'
							height='60'
							transform='translate(593.83 638.4) rotate(-180)'
							fill='none'
						/>
						<rect
							x='331.96'
							y='289.2'
							width='168.81'
							height='60'
							transform='translate(832.73 638.4) rotate(-180)'
							fill='none'
						/>
					</g>

					<text
						transform='translate(90.45 40.29) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 113.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.63 185.12) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.38 257.04) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[4].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(90.15 327.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[5].homeshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 41.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[1].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 113.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[2].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 184.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 257.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[4].awayshortlabel}</tspan>
					</text>
					<text
						transform='translate(420 329.74) scale(0.83 1)'
						textAnchor='middle'
						fontSize='24'
						fill='#fcd34c'
						fontFamily='extraBold'>
						<tspan>{stats[5].awayshortlabel}</tspan>
					</text>
					<text transform='translate(190.77 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].homescorepoints}</tspan>
					</text>
					<text transform='translate(190.87 180)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[3].homescorepoints}</tspan>
					</text>
					<text
						transform='translate(190.87 255.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[4].homescorepoints}</tspan>
					</text>
					<text
						transform='translate(190.87 325.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[5].homescorepoints}</tspan>
					</text>
					<text transform='translate(295.87 38)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[1].awayscorepoints}</tspan>
					</text>
					<text transform='translate(295.87 110)' fontSize='24' fill='#fff' fontFamily='extraBold'>
						<tspan>{stats[2].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 180.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[3].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 255.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[4].awayscorepoints}</tspan>
					</text>
					<text
						transform='translate(295.87 325.84)'
						fontSize='24'
						fill='#fff'
						fontFamily='extraBold'>
						<tspan>{stats[5].awayscorepoints}</tspan>
					</text>
				</svg>
			</div>
		)
	}

	if (stats[5]) return <Match6 />
	else if (stats[5] === undefined) return <Match5 />
	else if (stats[4] === undefined) return <Match4 />
	else if (stats[3] === undefined) return <Match3 />
	else if (stats[2] === undefined) return <Match2 />
}

export { Multi }
