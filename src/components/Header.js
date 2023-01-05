import Button from './button'

const Header = ({onAdd,showAdd}) => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button onClick= {onAdd} text= {showAdd ? 'Close' : 'Add'} color = {showAdd ? 'black' : 'green'}/>
    </header>
  )
}

// const headingStyles = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header