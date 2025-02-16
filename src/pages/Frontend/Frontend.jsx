import './Frontend.css';
import { Link } from 'react-router-dom';

const Frontend = () => {

  const levels = [
    {
      id: 1,
      title: 'Junior frontend developer questions',
    },
    {
      id: 2,
      title: 'Middle frontend developer questions'
    },
    {
      id: 3,
      title: 'Senior frontend developer questions'
    }
  ]

  return (
    <div className="frontend-container">
      <h1>Choose your level</h1>
      <div className="frontend-levels">
      {levels.map((level) => (
        <div key={level.id} className="level">
          <h3>{level.title}</h3>
          <Link to='/frontend/junior'><button className="choose-lvl-btn">Choose</button></Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Frontend;