import React , {Component} from 'react'
import Teacher from './Teacher'
import '../../css/Teachers.sass'

class Teachers extends Component{
  render(){
    return(
      <ul className="Teachers">
        {
          this.props.data.map( teacherData => {
            return <Teacher {...teacherData}/>
          })
        }
      </ul>
    )
  }
}

export default Teachers
