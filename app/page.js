export default async function Home() {
  const response = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
  const data = await response.json()

  return (
    <div>
      {data.teams
        .sort((a, b) => a.position - b.position)
        .map((team, index) => (
          <p key={index}>
            {team.name}
          </p>
        ))
      }
    </div>
  )
}
