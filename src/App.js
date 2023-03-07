import './App.css';
import styled from "styled-components";
import { Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

let ShopType = styled.nav`
	color: yellow;
  	font-size: 20px;
`

let Th = styled.th`
	border: 1px solid #444444;
  	font-weight: bold;
`

let Td = styled.td`
	border: 1px solid #444444;
  	font-weight: bold;
`


function App() {
	let navigate = useNavigate(); // 페이지 이동 도와주는 함수
	return (
		<div className="App">
			<div className="black-nav">
				<h1 style={{verticalAlign: "middle"}}>MoonBoard</h1>
				<ShopType onClick={ () => {navigate('/opensea')} }>openSea</ShopType>
				<ShopType onClick={ () => {navigate('/pala')} }>Pala</ShopType>
			</div>
			<div style={{ width: "1500px" }}>
				<Table>
					<thead>
					<tr>
						<Th style={{width: "200px"}}>NFT name</Th>
						<Th>FP</Th>
						<Th>￦</Th>
						<Th>$</Th>
						<Th>BTC</Th>
						<Th>ETH</Th>
						<Th>Kltn</Th>
						<Th>Matic</Th>
						<Th>Solana</Th>
					</tr>
					</thead>
					<tbody>
						<tr>
							{[0,1,2,3,4,5,6,7,8].map((e,i) => {return <Td key={i}>{e}</Td>})}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	  );
}

export default App;
