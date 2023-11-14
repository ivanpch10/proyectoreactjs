import { Link } from 'react-router-dom';
import './Home.css';
import bannercare from "../../assets/images/bannercare.jpg";

const Home = () => {
  return (
    <div className='home'>
      <h1>Bienvenido a la Tienda Online de Care Salud</h1>
      <p>Aquí podrás encontrar productos de todo tipo para tu bienestar.</p>
      <img src={bannercare} alt="Banner Care" className="banner-image" />
      <Link to={'/products'} className='b-home'>Entrar</Link>
    </div>
  );
}

export default Home;
