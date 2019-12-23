import React from 'react'
import './github.css'

class GitHub extends React.Component {

  state = { repos: [] }

  fetchGitHub() {
    fetch('https://api.github.com/users/ANNASTEPANOVA/starred?per_page=10&sort=created&direction=asc')
      .then(response => response.json())
      .then(data => this.setState({ repos: data }))
  }

  componentDidMount() {
    this.fetchGitHub()
  }

  render() {
    return (
      <div className="projects">
        <div className="repo-container">
          {this.state.repos.map(repo =>
            <div className="repo">
              <p key={repo.id}><a className="github-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></p>
              <p>{repo.language}</p>
              <p>{new Date(`${repo.created_at}`).toLocaleString('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
              })}
              </p>
              <p>{repo.description}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GitHub
