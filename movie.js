$(movieForm).on("submit", searchMovie)

function searchMovie(e) {
	e.preventDefault()
	$(movieDisplay).removeClass('hide')
	
	const title_value = $(title).val()
	const type_value = $(type).val()
	const plot_value = $(plot).val()
	const year_value = $(year).val()
	
	let baseURL = "https://www.omdbapi.com/"
	let query = "?t=" + title_value
	query += "&type=" + type_value
	query += "&plot=" + plot_value
	
	if (year_value) query += "&y=" + year_value
	
	query += "&apikey=trilogy"
	
	const queryURL = baseURL + query
	
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response)
		$(movie_title).text(response.Title)
		$(movie_genre).text(response.Genre)
		$(movie_plot).text(response.Plot)
		$(movie_poster).attr('src', response.Poster)
	});
}
