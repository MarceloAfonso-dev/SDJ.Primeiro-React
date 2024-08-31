import './style.css';
import American from '../../assets/images/amex-3-svgrepo-com.svg';
import Elo from '../../assets/images/elo-svgrepo-com.svg';
import Mastercard from '../../assets/images/mastercard-svgrepo-com.svg';
import Visa from '../../assets/images/visa-classic-svgrepo-com.svg';

//Houve REGEX, validação de bandeira de cartão de crédito com String

export default function Brand({ brand }) {
    const brandStr = brand.toString();

    switch (true) {
        case /^4/.test(brandStr):
            return <img src={Visa} alt="Logo Visa" />;
        case /^(51|52|53|54|55|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/.test(brandStr):
            return <img src={Mastercard} alt="Logo Mastercard" />;
        case /^(34|37)/.test(brandStr):
            return <img src={American} alt="Logo American Express" />;
        case /^(5067|4576|4011)/.test(brandStr):
            return <img src={Elo} alt="Logo Elo" />;
        default:
            return <span>Bandeira desconhecida</span>;
    }
}