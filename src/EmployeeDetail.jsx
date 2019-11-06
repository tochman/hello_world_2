import React from 'react'
import { List, Image, Grid, Button } from 'semantic-ui-react'

const EmployeeDetail = (props) => {
  let { employee } = props
  return (
    <List.Item key={employee.id}>
      <Image avatar src={employee.avatar} />
      <List.Content>
        <Grid>
          <Grid.Row columns={12}>
            <Grid.Column width={10}>
              <List.Header as='p'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
              <List.Description>
                {`${employee.email}`}
              </List.Description>
            </Grid.Column>
            <Grid.Column width={2} verticalAlign='middle'>
              <Button size='tiny' positive>View</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </List.Content>
    </List.Item>
  )
}

export default EmployeeDetail
