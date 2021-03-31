import PropTypes from 'prop-types'

const Title = ({ title }) => {
  const onClick = () => {
    
    console.log('onClick')
  }

    return(
        <h2 className='title'>
            <h1>{title}</h1>
        </h2>
    )
}

Title.defaultProps = {
  title: '닮은 동물 찾기 面像',
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Title