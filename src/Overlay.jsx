import React, { useEffect } from 'react'
import './App.css'

const Overlay = ({ stats }) => {


	return (
		<div id='container-svg'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				width={1250.5}
				height={91}
				viewBox='0 0 1250.5 91'>
				<defs>
					<filter
						id='luminosity-noclip'
						x={-1.5}
						y={-2}
						width={1254}
						height={66}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask' x={-1.5} y={-2} width={1254} height={66} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip)',
							}}></g>
					</mask>
					<filter
						id='luminosity-noclip-2'
						x={-2.5}
						y={-2}
						width={545}
						height={65}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask-2' x={-2.5} y={-2} width={545} height={65} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip-2)',
							}}></g>
					</mask>
					<filter
						id='luminosity-noclip-3'
						x={707.5}
						y={-1}
						width={545}
						height={64}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask-3' x={707.5} y={-1} width={545} height={64} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip-3)',
							}}></g>
					</mask>
					<filter
						id='luminosity-noclip-4'
						x={-2.5}
						y={-2}
						width={1254}
						height={25}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask-4' x={-2.5} y={-2} width={1254} height={25} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip-4)',
							}}></g>
					</mask>
					<filter
						id='luminosity-noclip-5'
						x={28.5}
						y={59}
						width={484}
						height={34}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask-5' x={28.5} y={59} width={484} height={34} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip-5)',
							}}></g>
					</mask>
					<filter
						id='luminosity-noclip-6'
						x={738.5}
						y={59}
						width={484}
						height={34}
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feFlood floodColor='#fff' result='bg' />
						<feBlend in='SourceGraphic' in2='bg' />
					</filter>
					<mask id='mask-6' x={738.5} y={59} width={484} height={34} maskUnits='userSpaceOnUse'>
						<g
							style={{
								filter: 'url(#luminosity-noclip-6)',
							}}></g>
					</mask>
				</defs>
				<g id='Layer_2' stats-name='Layer 2'>
					<g id='Container'>
						<g id='blackBar'>
							<g
								style={{
									mask: 'url(#mask)',
								}}>
								<rect x={0.5} width={1250} height={62} rx={10} />
							</g>
						</g>
						<g id='redBar'>
							<g
								style={{
									mask: 'url(#mask-2)',
								}}>
								<rect
									y={0.5}
									width={540}
									height={60}
									rx={10}
									style={{
										fill: '#940708',
									}}
								/>
							</g>
						</g>
						<g id='blueBar'>
							<g
								style={{
									mask: 'url(#mask-3)',
								}}>
								<rect
									x={710}
									y={1}
									width={540}
									height={59.5}
									rx={10}
									style={{
										fill: '#090064',
									}}
								/>
							</g>
						</g>
						<g
							id='gloss'
							style={{
								opacity: 0.3,
							}}>
							<g
								style={{
									mask: 'url(#mask-4)',
								}}>
								<path
									d='M1249.5,20.5H0v-10A10,10,0,0,1,10,.5H1239.5a10,10,0,0,1,10,10Z'
									style={{
										fill: '#fff',
									}}
								/>
							</g>
						</g>
						<g id='whiteLeft'>
							<g
								style={{
									mask: 'url(#mask-5)',
								}}>
								<rect
									x={30.5}
									y={61}
									width={480}
									height={30}
									rx={10}
									style={{
										fill: '#ccc',
									}}
								/>
							</g>
						</g>
						<g id='whiteRight'>
							<g
								style={{
									mask: 'url(#mask-6)',
								}}>
								<rect
									x={740.5}
									y={61}
									width={480}
									height={30}
									rx={10}
									style={{
										fill: '#ccc',
									}}
								/>
							</g>
						</g>
						<text
							textAnchor='middle'
							fill='white'
							transform='translate(500.11 40)'
							style={{
								fontSize: 24,
								fontFamily: 'extraBold',
							}}>
							{p1Score === null ? <span>{stats[0].homescore}</span> : <span>{p1Score}</span>}
						</text>
						<text
							textAnchor='middle'
							transform='translate(745.11 40)'
							fill='white'
							style={{
								fontSize: 24,
								fontFamily: 'extraBold',
							}}>
							{p2Score === null ? <span>{stats[0].awayscore}</span> : <span>{p2Score}</span>}
						</text>
						<text
							textAnchor='middle'
							transform='translate(621.61 40)'
							fill='white'
							style={{
								fontSize: 26,
								fontFamily: 'semiBold',
							}}>
							{!stats[0].racelength ? <></> : <span>Race To{stats[0].racelength}</span>}
							{frameCount === null ? <></> : <span>Race to{frameCount}</span>}
						</text>
						<text
							textAnchor='middle'
							transform='translate(125.61 82)'
							style={{
								fontSize: 16,
								fontFamily: 'extraBold',
							}}>
							{stats[0].venuename}
						</text>
						<text
							textAnchor='middle'
							transform='translate(1125.61 82)'
							style={{
								fontSize: 16,
								fontFamily: 'extraBold',
							}}>
							{stats[0].timezone}
						</text>
						<text
							textAnchor='middle'
							transform='translate(410.11 40)'
							fill='white'
							style={{
								fontSize: 36,
								fontFamily: 'semiBold',
							}}>
							{stats[0].homescorepoints}
						</text>
						<text
							textAnchor='middle'
							transform='translate(835.11 40)'
							fill='white'
							style={{
								fontSize: 36,
								fontFamily: 'semiBold',
							}}>
							{stats[0].awayscorepoints}
						</text>
						<text
							textAnchor='middle'
							transform='translate(192.61 40)'
							fill='white'
							style={{
								fontSize: 33,
								fontFamily: 'semiBold',
							}}>
							{stats[0].homeshortlabel}
						</text>
						<text
							textAnchor='middle'
							transform='translate(1060.61 40)'
							fill='white'
							style={{
								fontSize: 33,
								fontFamily: 'semiBold',
							}}>
							{stats[0].awayshortlabel}
						</text>
						<text
							textAnchor='middle'
							transform='translate(639.86 82)'
							fill='white'
							style={{
								fontSize: 20,
								fontFamily: 'extraBold',
							}}>
							{}
						</text>
						<text
							textAnchor='middle'
							transform='translate(527.11 82)'
							style={{
								fontSize: 20,
								fontFamily: 'extraBold',
							}}>
							{}
						</text>
						<text
							textAnchor='middle'
							transform='translate(840.61 82)'
							style={{
								fontSize: 16,
								fontFamily: 'extraBold',
							}}>
							{stats[0].compname}
						</text>
						<text
							textAnchor='middle'
							transform='translate(415.61 82)'
							style={{
								fontSize: 16,
								fontFamily: 'extraBold',
							}}>
							ls.poolstat.net.au
						</text>
					</g>
				</g>
			</svg>
		</div>
	)
}

export { Overlay }
