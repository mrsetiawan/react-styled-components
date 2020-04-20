export default {
  root: {
    position: 'absolute',
    top: 0,
    transition: 'all 0.6s'
  },
  footer: {
    position: 'absolute',
    top: 530,
    left: 0,
    padding: 15,
    width: '100%',
    height: 110,
    color: '#ffffff',
    fontSize: 14,
    textShadow: '1px 1px 0 rgba(0,0,0,0.6)',
    background: 'rgba(0,0,0,0.3)',
    lineHeight: '1.4em',
    boxSizing: 'border-box'
  },
  title: {
    margin: '0 0 10px 0',
    cursor: 'pointer',
    ':hover' :{
      transition: 'all .5s ease-out',
      color: 'red',
      border: 'none'
    }
  }
}