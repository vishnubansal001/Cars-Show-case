import { FilterProps } from "@/types";

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '264fadaf53msh27d1d5cc9d4b9ddp177687jsn9625a31ccec9',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	// const response = await fetch(url, options);
// 	// const result = await response.text();
// 	// console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, year, model, limit, fuel } = filters;
  
	// Set the required headers for the API request
	const headers: HeadersInit = {
	  "X-RapidAPI-Key": "264fadaf53msh27d1d5cc9d4b9ddp177687jsn9625a31ccec9",
	  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};
  
	// Set the required headers for the API request
	const response = await fetch(
	  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
	  {
		headers: headers,
	  }
	);
  
	// Parse the response as JSON
	const result = await response.json();
  
	return result;
  }