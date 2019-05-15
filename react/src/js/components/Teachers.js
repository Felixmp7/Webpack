import React , {Component} from 'react'
import Teacher from './Teacher'

class Teachers extends Component{
  render(){
    return(
      <ul className="Teachers">
        {
          this.props.data.teachers.map( teacherData => {
            return <Teacher {...teacherData}/>
          })
        }
      </ul>
    )
  }
}

export default Teachers
