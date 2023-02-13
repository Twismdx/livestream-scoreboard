import { useState, useEffect } from 'react'
import axios from 'axios'
import ExampleLink from '/ExampleLink.svg'
import Asset1 from '/Asset1.svg'
import Button from '@girishsawant999/react-loading-button'
import './App.css'

function App() {
	const [drid, setDrid] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [message, setMessage] = useState()
	const [copy, setCopy] = useState()
	const [link, setLink] = useState()
	const [stats, setStats] = useState([])

	const onChange = (e) => {
		setDrid(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		const interval = setInterval(async () => {
			setMessage('Match ID Submitted Successfully')
			await axios({
				method: 'POST',
				url: `https://twism.vercel.app/matchid?matchid=${drid}`,
			})
				.then(function (response) {
					setCopy(response.data)
					setLink(response.data)
					setIsLoading(true)
					console.log(response)
					copyToClipboard()
				})
				.catch(function (error) {
					console.log(error)
				})
		}, 5000)
		return () => clearInterval(interval)
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(copy)
		setMessage('Link Copied!')
	}

	useEffect(() => {
		const interval = setInterval(() => {
			async function FetchReq() {
				await axios({
					url: link,
					method: 'GET',
					dataType: 'json',
				})
					.catch((err) => {
						console.error(err)
					})
					.then((response) => {
						var data = Object.keys(response.data).map(function (key) {
							return response.data[key]
						})
						setIsLoading(false)
						setStats(data)
					})
			}
		}, 5000)
		FetchReq()
		return () => clearInterval(interval)
	}, [link, stats, isLoading])

	if (!stats[0])
		return (
			<>
				<div className='container'>
					<div className='header'>
						<h1 className='intro'>Welcome to the Streamers Portal</h1>
						<h2>
							We need to find your match id for the match that we want to stream.
							<br />
							<br />
							Goto <a href='https://www.poolstat.net.au/site/index'>www.poolstat.net.au</a> and
							find your association - league/competition name, once there if you click on
							matches, and mouse over the match score and you will see your match ID in the
							bottom left, See the image below.
						</h2>
						<img className='svg' src={Asset1} alt='Asset1.svg' />
						<img className='svg1' src={ExampleLink} alt='ExampleLink.svg' />
						<h2>
							<div className='matchIdInput'>
								<form onSubmit={handleSubmit}>
									<input type='number' placeholder='93378' onChange={onChange} />
									<br />
									{message == undefined ? <></> : message}
									<Button type='submit' loading={isLoading}>
										Submit
									</Button>
								</form>
								<br />
								Pressing the button above will copy a link for you to paste in OBS, wirecast
								etc, and then will also re-direct you to preview your scoreboard live.
							</div>
						</h2>
					</div>
				</div>
			</>
		)
	else if (stats[0])
		return (
			<div className='main-container'>
				<div className='container-1'>
					<Multi stats={stats} />
				</div>
				<div className='container-2'>
					<Overlay stats={stats} />
				</div>
			</div>
		)
}

export default App
