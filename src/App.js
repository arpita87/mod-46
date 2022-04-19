
import './App.css';
import Countries from './Component/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}




// import Countries from './Component/Countries/Countries';      //mod46-3
// import Person from './Component/Person/Person';
// import Head from './Component/Head/Head';

/* <LoadCountries></LoadCountries>                  mod46-3 */
//  <Countries></Countries>
// <Person></Person>
// <Head></Head>                    mod46-3                */}










//          /////////////           mod46-3              ////////////////
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h3>visiting country</h3>
//       <h3>all {countries.length}</h3>
//       {
//         // countries.map(country => <p>{country.name}</p>)
//         countries.map(country => <Country name={country.name} area={country.area}></Country>)
//         //<Country name={country.name.common}></Country>
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>name : {props.name}</h2>
//       <h3>area : {props.area}</h3>
//     </div>
//   )
// }

export default App;
