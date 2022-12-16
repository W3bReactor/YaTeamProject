import React from 'react';
import { SupTitle } from '../UI/SupTitle';
import { Heading2 } from '../UI/Heading2';
import project_1 from '../../assets/images/MainPageImages/portfolio-1.png';
import project_2 from '../../assets/images/MainPageImages/portfolio-2.jpg';
import project_3 from '../../assets/images/MainPageImages/portfolio-3.png';
import project_4 from '../../assets/images/MainPageImages/portfolio-4.jpg';
import { Button } from '../UI/Button';

export const Portfolio = () => {
	return (
		<section className="container py-16">
			<SupTitle>Портфолио</SupTitle>
			<Heading2 className="mb-10 dark:text-light duration-500">Примеры наших работ</Heading2>
			<ul className="grid gap-y-10 gap-x-5 grid-cols-12">
				<li className="col-span-6  ">
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<img
								className="rounded-xl object-cover w-full h-full"
								src={project_1}
								alt="Интернет-магазин"
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							Интернет-магазин
						</figcaption>
					</figure>
				</li>
				<li className="col-span-6  ">
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<img
								className="rounded-xl object-cover w-full h-full"
								src={project_2}
								alt="Сайт-портфолио"
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							Сайт-портфолио
						</figcaption>
					</figure>
				</li>
				<li className="col-span-6  ">
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<img
								className="rounded-xl object-cover w-full h-full"
								src={project_3}
								alt="Сайт-портфолио"
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							Сайт-портфолио
						</figcaption>
					</figure>
				</li>
				<li className="col-span-6">
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<img
								className="rounded-xl object-cover w-full h-full"
								src={project_4}
								alt="Сайт-портфолио"
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							Сайт-портфолио
						</figcaption>
					</figure>
				</li>
			</ul>
			<div className="flex justify-center items-center mt-10">
				<Button className="text-dark hover:text-light dark:text-light duration-500">
					Посмотреть все проекты
				</Button>
			</div>
		</section>
	);
};
