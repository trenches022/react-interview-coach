import './MainPage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {

  const stacks = [
    {
      id: 1,
      title: 'Frontend',
      description: 'Prepare for a frontend developer job-interview',
    },
    {
      id: 2,
      title: 'Backend',
      description: 'Prepare for a backend developer job-interview (in progress...)',
    },
    {
      id: 3,
      title: 'FullStack',
      description: 'Prepare for a fullstack developer job-interview (in progress...)',
    },
  ]

  return (
    <div className="mainpage-container">
      <h1><span>Interview Coach</span> - be prepared for job interviews.</h1>
      <h2>Choose Stack</h2>
      <div className="mainpage-stacks">
        {stacks.map((stack) => (
          <div className="stack" key={stack.id}>
            <h3>{stack.title}</h3>
            <h4>{stack.description}</h4>
            <Link to='/frontend'><button className="choose-stack-btn">Choose</button></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage;