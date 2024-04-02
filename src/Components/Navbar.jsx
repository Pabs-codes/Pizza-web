import React from 'react';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#0a0a0a',
  };

  const menuItemStyle = {
    marginLeft: '20px',
  };

  return (
    <div style={navStyle}>
         <span style={{ marginRight: '10px' }}>☰</span>
      <div style={{ flex: 1 }}>PIZZA SHOP</div>
      <div style={{ flex: 1, textAlign: 'center' }}>LOGO HERE</div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <div style={menuItemStyle}>MY ACCOUNT 👤</div>
      </div>
    </div>
  );
}

export default NavBar;


// import React from 'react';

// const NavBar = () => {
//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#333',
//     color: '#fff',
//   };

//   const menuItemStyle = {
//     marginLeft: '20px',
//   };

//   return (
//     <div style={navStyle}>
//       <div>
//         <span style={{ marginRight: '10px' }}>☰</span>
//         PIZZA SHOP
//       </div>
//       <div style={{ flex: 1, textAlign: 'center' }}>LOGO HERE</div>
//       <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
//         <div style={menuItemStyle}>MY ACCOUNT</div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
