movies: [
          { title: "The Godfather", director: "Francis Coppola" },
          { title: "Star Wars", director: "Rian Johnson" },
          { title: "The Shawshank Redemption", director: "Frank Darabont" }
        ]


        {
        this.state.movies.map((oneMovie, index) => {
          return <ImprovedCard key={index} {...oneMovie} />
        })
      }

      {
        this.state.movies.map((oneMovie, index) => {
          return <ImprovedCard key={index} title={oneMovie.title}  director={oneMovie.director}/>
        })