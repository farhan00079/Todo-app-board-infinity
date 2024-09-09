import React from 'react';

function Nav() {
  return (
    <div>
      <nav style={styles.navbar}>
        <h1 style={styles.title}>BOARD INFINITY</h1>
      </nav>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    border: '3px solid rgb(18, 18, 76)'
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default Nav;
