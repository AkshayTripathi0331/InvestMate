import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Money bag logo" />
      <h1>InvestMate</h1>
    </header>
  );
}
