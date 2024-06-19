import Bogdan from './components/Bogdan'

export default function Home() {
	const sampleData = [85, 75, 60, 90, 70]
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Bogdan data={sampleData} />
		</main>
	)
}
