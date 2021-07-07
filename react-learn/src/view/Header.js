import React from 'react'
import { connect } from '../react-redux'
import { increase } from '../store/action/counter'
import { fetchStudents } from '../store/action/student/searchResult'


function mapStateToProps(state) {
  return {
    counter: state.counter,
    stus: state.students.result.datas
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: function () {
      dispatch(increase())
    },
    getStudents: function () {
      dispatch(fetchStudents())
    }
  }
}

function Header(props) {


  const lis = props.stus.map(item => {
    return <li key={ item.id }>地区---{item.address}---姓名{item.name}---电话{ item.phone }</li>
  })

   return <div>
     <h1>{props.counter}</h1>
     <button onClick={() => {
       props.increase()
     }}>增加</button>

     <div>
       <h1>学生信息</h1>
       <ul>
         {lis}
       </ul>
     </div>
     
     <button onClick={() => {
       props.getStudents()
     }}>获得学生信息</button>
  </div>
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)



