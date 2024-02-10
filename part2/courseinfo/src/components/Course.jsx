import SubHeader from './SubHeader'
import Content from './Content'
import Statistics from './Statistics'

const Course = ({ course }) => {
    return (
        <>
            <SubHeader text={course.name}/>
            <Content content={ course.parts }/>     
            <Statistics content={ course.parts }/>      
        </>        
    )
}

export default Course