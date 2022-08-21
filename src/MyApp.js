import React from 'react'

const MyApp = () => {
  return (
    <>
      <h1 className='myclasname'>hello world!</h1>
      <p>awesome</p>
      <MyName/>
      <App/>
      <Lpp/>
    </>
  );
};

const MyName = () => {
    return <h1>this is 2nd componet write in first componet so i can use this function by tag name (MyName) n number of times is called Nested componet. </h1>
}
const App = () => {
    return (
        <>
          <h1 className='myclassname'>always write two words combination attributes in ==(camelCase) like this</h1>
          <div>this appjs show where you write comand in indexjs so go on index js and write reactDom render and React.StrictMode and write in app with close tag</div>
          <div>{3+4*3+5*7}</div>
          <img src="" alt="" />
        </>
      )
    }
    const Lpp = () => {
        return (
            <React.Fragment>
              <h1>WELCOME PRASHANT BOKADE </h1>
            </React.Fragment>
          )
        }

export default MyApp


