import React, { useState, useEffect } from "react";

export const MovieFetch = ({ movieTitle, setSearch }) => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`${process.env.REACT_APP_URL}movies?search=${movieTitle}`
			);
			const data = await response.json();
			setMovie(data);
		}

		getData();
	}, [movieTitle]);

	return (
		<div className="flex items-center justify-center">
			<ul className="gridlayout">
				{console.log(movie)}
				{movie &&
					movie.map((movie, index) => (
						<li onClick={()=> setSearch(movie.Title)} key={index}>
							<div className="flex justify-center h-full w-48">
								<div className="card">
									<a href="#!">
										<img
											className="object-scale-down p-2"
											src={(movie.Poster === "N/A") ? "https://plchldr.co/i/500x500?bg=111111" :
											movie.Poster}
											alt={movie.Title}
										/>
									</a>
									<div className="p-6">
										<h5 className="text-gray-900 text-xl font-medium mb-2">
											{movie.Title}
										</h5>
										<p className="text-gray-700 text-base mb-4">
											{movie.Year}
										</p>
									</div>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default MovieFetch;
