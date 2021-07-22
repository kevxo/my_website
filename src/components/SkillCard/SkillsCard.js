import React from 'react'
import { Card, Container, Divider } from 'semantic-ui-react'

const SkillsCard = () => (
  <Container textAlign="justified">
    <h2 class="text-color">Skills</h2>
    <Card.Group>
      <Card fluid color='red' header='Languages/Framworks: Ruby on Rails, Python, JavaScript, SQL, FastApi, HTML, CSS' />
      <Card fluid color='orange' header='Tools: ActiveRecord, PostgreSQL, RSpec, Git, Minitest, Unittest, GraphQL, Heroku, TravisCI' />
      <Card fluid color='yellow' header='Methodologies: Git Workflow, Microservices, Agile Development, TDD/BDD' />
    </Card.Group>
    <Divider />

  </Container>
)

export default SkillsCard