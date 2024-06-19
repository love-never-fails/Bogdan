'use client'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import * as V from 'victory'

export default function Bogdan({ data }) {
	return (
		<>
			<div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Отбор кандидатов на работу
				</p>
				<h2>
					Богданов Богдан
					<br /> 34 года
				</h2>
			</div>

			<div className="relative  place-items-center ">
				<svg width="400" height="400" viewBox="0 0 400 400">
					<V.VictoryPie
						colorScale={['#0084FF', '#44BEC7', '#FFC300', '#FA3C4C', '#D696BB']}
						standalone={false}
						radius={({ datum }) => 100 + datum.y}
						width={400}
						height={400}
						data={[
							{ x: '💪', y: data[0] },
							{ x: '🤝', y: data[1] },
							{ x: '🤗', y: data[2] },
							{ x: '🥰', y: data[3] },
							{ x: '🙂', y: data[4] },
						]}
						innerRadius={60}
						labelRadius={(args) => (args.datum.y + 80) / 2}
						labels={({ datum }) => `${datum.x} \n ${datum.y}%`}
						style={{
							labels: {
								fontSize: ({ datum }) =>
									datum.y > 75 ? 37 : datum.y > 49 ? 35 : 30,

								fill: ({ datum }) =>
									datum.y > 75 ? 'green' : datum.y > 49 ? 'yellow' : 'red',
							},
							data: {
								fillOpacity: 0.7,
								stroke: 'white',
								strokeWidth: 1,
								strokeOpacity: 0.5,
							},
						}}
					/>
					<circle cx="200" cy="200" r={200} fill="rgba(0,0,0,0.05)" />
					<V.VictoryLabel
						textAnchor="middle"
						verticalAnchor="middle"
						x={200}
						y={200}
						style={{ fontSize: 25, fontFamily: 'cursive' }}
						text="Богдан"
					/>
				</svg>
			</div>
			<Accordion selectionMode="multiple">
				<AccordionItem
					key="1"
					aria-label="Accordion 1"
					title=" Открытость к опыту"
					indicator={`💪 ${data[0]}%`}
				>
					Высокий уровень открытости к опыту указывает на творческий подход к
					решению задач, гибкость в мышлении и открытость новым идеям. Кандидат
					вероятно будет хорошо справляться с инновационными проектами и
					нестандартными задачами.
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Accordion 2"
					title="Добросовестность"
					indicator={`🤝 ${data[1]}%`}
				>
					Стабильно высокое значение добросовестности свидетельствует о
					надежности, ответственности и организованности кандидата. Такие
					сотрудники обычно добросовестно относятся к выполнению своих
					обязанностей и внимательны к деталям.
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Accordion 3"
					title="Экстраверсия"
					indicator={`🤗 ${data[2]}%`}
				>
					Умеренная экстраверсия может означать, что кандидат комфортно
					чувствует себя как в социальных взаимодействиях, так и в одиночной
					работе. Он может быть активным участником командных мероприятий, но
					также ценит время на самостоятельную работу.
				</AccordionItem>
				<AccordionItem
					key="4"
					aria-label="Accordion 4"
					title="Дружелюбие"
					indicator={`🥰 ${data[3]}%`}
				>
					Высокий уровень дружелюбия говорит о том, что кандидат легко находит
					общий язык с коллегами, проявляет эмпатию и стремится к гармоничному
					сотрудничеству. Это может способствовать созданию позитивной атмосферы
					в команде.
				</AccordionItem>
				<AccordionItem
					key="5"
					aria-label="Accordion 5"
					title="Эмоциональная стабильность"
					indicator={`🙂 ${data[4]}%`}
				>
					Достаточно высокая эмоциональная стабильность указывает на способность
					кандидата справляться со стрессом и сохранять хладнокровие в сложных
					ситуациях. Такие сотрудники реже подвержены эмоциональным срывам и
					способны эффективно решать конфликты.
				</AccordionItem>
			</Accordion>
		</>
	)
}
