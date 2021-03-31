import PropTypes from 'prop-types'

const Advertisement = ({ title }) => {
  const onClick = () => {
    
    console.log('onClick')
  }

    return(
        <h2 className='title'>
            <h1>{title}</h1>
        </h2>
    )
}

Advertisement.defaultProps = {
  title: '----광고----',
}

Advertisement.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Advertisement