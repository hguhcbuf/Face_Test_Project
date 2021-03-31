import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    
    console.log('onClick')
  }

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='gray' text='Upload Image' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
  title: '이미지를 올려주세요 : ',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header